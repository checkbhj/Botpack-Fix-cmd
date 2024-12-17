const fs = require("fs");
const { loadImage, createCanvas } = require("canvas");

module.exports.config = {
  name: "rps",
  version: "1.0.3",
  hasPermission: 0,
  credits: global.config.Codemaker,
  description: "Play Rock-Paper-Scissors with the bot",
  usePrefix: true,
  commandCategory: "game",
  cooldowns: 5,
  usages: "play <rock/paper/scissors> / delete"
};

async function createImage(userChoice, botChoice) {
  const path = __dirname + "/cache/rps.png";
  const canvas = createCanvas(800, 400);
  const ctx = canvas.getContext("2d");

  // Background
  ctx.fillStyle = "#ffffff";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // Load images
  const rockImage = await loadImage("https://i.imgur.com/bRAYPd5.jpeg");
  const paperImage = await loadImage("https://i.imgur.com/OpS1UWq.jpeg");
  const scissorsImage = await loadImage("https://i.imgur.com/i84XIqX.jpeg");

  // Draw user choice
  let userImage;
  if (userChoice === "rock") userImage = rockImage;
  else if (userChoice === "paper") userImage = paperImage;
  else if (userChoice === "scissors") userImage = scissorsImage;

  ctx.drawImage(userImage, 50, 100, 150, 150); // User's image

  // Draw bot choice
  let botImage;
  if (botChoice === "rock") botImage = rockImage;
  else if (botChoice === "paper") botImage = paperImage;
  else if (botChoice === "scissors") botImage = scissorsImage;

  ctx.drawImage(botImage, 600, 100, 150, 150); // Bot's image

  // Write the result
  ctx.font = "30px Arial";
  ctx.fillStyle = "#000000";
  ctx.fillText("Result:", 350, 50);
  return fs.writeFileSync(path, canvas.toBuffer("image/png")), path;
}

module.exports.run = async function ({ event, api, args }) {
  const { threadID, messageID } = event;

  // Initialize game data
  if (!global.moduleData.rpsGame) global.moduleData.rpsGame = new Map();
  let data = global.moduleData.rpsGame.get(threadID) || { gameOn: false };

  // Command to play the game
  if (args[0] === "play") {
    if (!args[1] || !["rock", "paper", "scissors"].includes(args[1].toLowerCase())) {
      return api.sendMessage("Please choose either rock, paper, or scissors.", threadID, messageID);
    }

    const userChoice = args[1].toLowerCase();
    const botChoices = ["rock", "paper", "scissors"];
    const botChoice = botChoices[Math.floor(Math.random() * 3)];

    let resultMessage;

    if (userChoice === botChoice) {
      resultMessage = `It's a tie! We both chose ${botChoice}.`;
    } else if (
      (userChoice === "rock" && botChoice === "scissors") ||
      (userChoice === "scissors" && botChoice === "paper") ||
      (userChoice === "paper" && botChoice === "rock")
    ) {
      resultMessage = `You win! ${userChoice} beats ${botChoice}.`;
    } else {
      resultMessage = `You lose! ${botChoice} beats ${userChoice}.`;
    }

    // Create the image and send the message
    const imagePath = await createImage(userChoice, botChoice);
    return api.sendMessage({ body: resultMessage, attachment: fs.createReadStream(imagePath) }, threadID, messageID);
  }

  // Command to delete the game
  if (args[0] === "delete") {
    global.moduleData.rpsGame.delete(threadID);
    return api.sendMessage("Game deleted. You can play again with 'rps play <rock/paper/scissors>'.", threadID, messageID);
  }

  // Default message for unrecognized commands
  return api.sendMessage("Invalid command! Use 'rps play <rock/paper/scissors>' to play or 'rps delete' to end the game.", threadID, messageID);
};
