const APIURL = global.config.ApiUrlV3;
const axios = require("axios");

module.exports.config = {
  name: "ngl",
  version: "1.0.0",
  hasPermssion: 0,
  credits: global.config.Codemaker,
  description: "Send a message to the NGL chat",
  usePrefix: true, // Indicates the use of a prefix
  usages: "ngl <username> | <message> | <count>",
  commandCategory: "fun",
  cooldowns: 10,
};

module.exports.run = async function ({ api, event, args }) {
  const content = args
    .join(" ")
    .split("|")
    .map((item) => (item = item.trim()));
  let username = content[0];
  let message = content[1];
  let count = parseInt(content[2]);

  if (!username || !message || isNaN(count) || count <= 0 || !Number.isInteger(count)) {
    api.sendMessage("Invalid command usage. Usage: ngl <username> <message> <count>", event.threadID, event.messageID);
    return;
  }

    try {
      const response = await axios.get(`${APIURL}/ngl/spam?username=${encodeURIComponent(username)}&message=${encodeURIComponent(message)}&count=${encodeURIComponent(count)}`); 
await api.sendMessage(`Sent ${count} messages to ${username}`, event.threadID, event.messageID);
    } catch (error) {
      api.sendMessage("An error occurred, please try again later.", event.threadID, event.messageID);
      console.error("Error in ngl command:", error);
    }
  };
  