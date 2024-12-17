const gameData = new Map();

module.exports.config = {
  name: "guessword",
  version: "1.0.0",
  hasPermssion: 0,
  credits: global.config.Codemaker,
  description: "Guess the word the bot is thinking of.",
  usePrefix: true,
  commandCategory: "game",
  cooldowns: 5,
  usages: "guessword <start> | guessword <delete> | guessword set <word1> <word2> ... | guessword <word>"
};

module.exports.run = async function({ event, api, args }) {
  const { threadID, messageID } = event;

  // Handle setting words
  if (args[0] === "set" && args.length > 1) {
    const words = args.slice(1);
    gameData.set(threadID, { words, correctWord: null });
    return api.sendMessage("Word list set! Start the game by typing `" + global.config.PREFIX + "guessword start`.", threadID, messageID);
  }

  // Handle starting a new game
  if (args[0] === "start") {
    const gameInfo = gameData.get(threadID);
    if (!gameInfo || !gameInfo.words || gameInfo.words.length === 0) {
      return api.sendMessage("Please set the words first using `" + global.config.PREFIX + "guessword set <word1> <word2> ...`.", threadID, messageID);
    }

    const randomWord = gameInfo.words[Math.floor(Math.random() * gameInfo.words.length)];
    gameInfo.correctWord = randomWord;
    gameData.set(threadID, gameInfo);
    return api.sendMessage("I've picked a word from the list you provided. Try to guess it!", threadID, messageID);
  }

  // Handle deleting an active game
  if (args[0] === "delete") {
    if (!gameData.has(threadID)) {
      return api.sendMessage("There's no active game to delete.", threadID, messageID);
    }

    gameData.delete(threadID);
    return api.sendMessage("The game has been deleted. Start a new one by typing `" + global.config.PREFIX + "guessword start`.", threadID, messageID);
  }

  // Handle guessing the word
  const userGuess = args.join(" ").toLowerCase();
  const gameInfo = gameData.get(threadID);

  if (!gameInfo || !gameInfo.correctWord) {
    return api.sendMessage("There's no active game. Start a new one by typing `" + global.config.PREFIX + "guessword start`.", threadID, messageID);
  }

  // Check the user's guess
  if (userGuess === gameInfo.correctWord.toLowerCase()) {
    gameData.delete(threadID);
    return api.sendMessage(`Congratulations! You've guessed the correct word: ${gameInfo.correctWord}. Type \`${global.config.PREFIX}guessword start\` to play again!`, threadID, messageID);
  } else {
    return api.sendMessage("Incorrect! Try again.", threadID, messageID);
  }
};

