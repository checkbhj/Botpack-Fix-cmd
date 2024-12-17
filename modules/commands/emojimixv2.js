const APIURL = global.config.ApiUrlV3;
const path = require('path');
  const axios = require('axios');
  const fs = require('fs');

  module.exports.config = {
    name: "emojimixv2",
    version: "1.9.0",
    hasPermssion: 0,
    credits: global.config.Codemaker,
    description: "mix emojis",
    usePrefix: true, // Indicates the use of a prefix
    commandCategory: "...",
    usages: "emojimixv2 emoji1 | emoji2 ",
    cooldowns: 0,
  };

  module.exports.run = async function ({ api, event, args }) {
    try {
      const text = args.join(" ");
      const text1 = text.substr(0, text.indexOf(' | '));
      const text2 = text.split(" | ").pop();

      if (!text1 || !text2) {
        return api.sendMessage(`Usage: ${global.config.PREFIX}emojimixv2 ☕ | 😁\n\nNote: You can use up to 2 emojis`, event.threadID, event.messageID);
      }

      const response = await axios.get(`${APIURL}/emojimix?emoji1=${encodeURIComponent(text1)}&emoji2=${encodeURIComponent(text2)}`, { responseType: "arraybuffer" });
      const emoji = response.data;

      const filePath = path.join(__dirname, 'cache', 'emoji.png');
      fs.writeFileSync(filePath, Buffer.from(emoji), 'binary');

      await api.sendMessage({ body: "Here's your emoji mix", attachment: fs.createReadStream(filePath) }, event.threadID, event.messageID);
    } catch (error) {
api.sendMessage(`error na bai maya naman\n${error}`, event.threadID, event.messageID);
      console.error("Error occurred:", error);
    }
  };
  