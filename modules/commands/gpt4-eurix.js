const APIURL = global.config.ApiUrlV3;
const axios = require("axios");
const path = require("path");
const fs = require("fs");

module.exports.config = {
  name: "gpt4",
  version: "9.0.2",
  hasPermission: 0,
  credits: global.config.Codemaker,
  description: "GPT-4 conversational bot. Please use responsibly.",
  usePrefix: true, // Set to true to enable the use of prefix while false if not.
  commandCategory: "ai",
  cooldowns: 9, // seconds to activate again
};

module.exports.run = async function ({ api, event, args }) {
  try {
    const message = event.messageReply ? event.messageReply.body : args.join(" ");
    const img = path.join(__dirname, "cache", "ai.png");

    if (!message) {
      return api.sendMessage(
        {
          body: `${global.config.PREFIX}ai <ask>`,
          attachment: fs.createReadStream(img),
        },
        event.threadID,
        event.messageID
      );
    }

    const res = await axios.get(`${APIURL}/gpt4`, {
      params: {
        ask: message,
        id: event.senderID,
      },
    });

    const answer = res.data.eurix || "No response from GPT-4.";
    api.sendMessage(answer, event.threadID, event.messageID);
  } catch (error) {
    api.sendMessage("Error fetching GPT-4 API", event.threadID, event.messageID);
    console.error(error);
  }
};
