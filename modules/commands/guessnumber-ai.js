const gameData = new Map();

module.exports.config = {
  name: "guessnumber",
  version: "1.0.0",
  hasPermssion: 0,
  credits: global.config.Codemaker,
  description: "Guess the number the bot is thinking of.",
  usePrefix: true,
  commandCategory: "game",
  cooldowns: 5,
  usages: "guessnumber <start> | guessnumber <delete> | guessnumber set <min> <max> | guessnumber <number>>"
};

module.exports.run = async function({ event, api, args }) {
  const { threadID, messageID } = event;

  // Handle setting minimum and maximum values
  if (args[0] === "set" && args.length === 3) {
    const minNumber = parseInt(args[1]);
    const maxNumber = parseInt(args[2]);

    if (isNaN(minNumber) || isNaN(maxNumber) || minNumber >= maxNumber) {
      return api.sendMessage("Please provide valid numbers where min < max.", threadID, messageID);
    }

    gameData.set(threadID, { minNumber, maxNumber, correctNumber: null });
    return api.sendMessage(`Range set! The number will be between ${minNumber} and ${maxNumber}. Start the game by typing \`${global.config.PREFIX}guessnumber start\`.`, threadID, messageID);
  }

  // Handle starting a new game
  if (args[0] === "start") {
    const gameInfo = gameData.get(threadID);
    if (!gameInfo || !gameInfo.minNumber || !gameInfo.maxNumber) {
      return api.sendMessage(`Please set the range first using \`${global.config.PREFIX}guessnumber set <min> <max>\`.`, threadID, messageID);
    }

    const randomNumber = Math.floor(Math.random() * (gameInfo.maxNumber - gameInfo.minNumber + 1)) + gameInfo.minNumber;
    gameInfo.correctNumber = randomNumber;
    gameData.set(threadID, gameInfo);
    return api.sendMessage(`I've picked a number between ${gameInfo.minNumber} and ${gameInfo.maxNumber}. Try to guess it!`, threadID, messageID);
  }

  // Handle deleting an active game
  if (args[0] === "delete") {
    if (!gameData.has(threadID)) {
      return api.sendMessage("There's no active game to delete.", threadID, messageID);
    }

    gameData.delete(threadID);
    return api.sendMessage("The game has been deleted. Start a new one by typing \`${global.config.PREFIX}guessnumber start\`.", threadID, messageID);
  }

  // Handle guessing the number
  const userGuess = parseInt(args[0]);
  if (isNaN(userGuess)) {
    return api.sendMessage(`Please enter a valid command or a number between the set range.`, threadID, messageID);
  }

  const gameInfo = gameData.get(threadID);
  if (!gameInfo || gameInfo.correctNumber === null) {
    return api.sendMessage(`There's no active game. Start a new one by typing \`${global.config.PREFIX}guessnumber start\`.`, threadID, messageID);
  }

  // Validate the guess against the set range
  if (userGuess < gameInfo.minNumber || userGuess > gameInfo.maxNumber) {
    return api.sendMessage(`Please enter a number between ${gameInfo.minNumber} and ${gameInfo.maxNumber}.`, threadID, messageID);
  }

  // Check the user's guess
  if (userGuess < gameInfo.correctNumber) {
    return api.sendMessage("Too low! Try again.", threadID, messageID);
  } else if (userGuess > gameInfo.correctNumber) {
    return api.sendMessage("Too high! Try again.", threadID, messageID);
  } else {
    gameData.delete(threadID);
    return api.sendMessage(`Congratulations! You've guessed the correct number: ${gameInfo.correctNumber}. Type \`${global.config.PREFIX}guessnumber start\` to play again!`, threadID, messageID);
  }
};
