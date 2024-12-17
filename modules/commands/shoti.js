const fs = require("fs");
const path = require("path");
const axios = require("axios");

module.exports.config = {
  name: "shoti",
  version: "1.0.0",
  credits: global.config.Codemaker,
  hasPermission: 1,
  description: "Generate Random shoti",
  usePrefix: true, // Prefix enabled
  commandCategory: "fun",
  cooldowns: 9 // seconds to activate again
};


module.exports.run = async function ({api, event }) {
  try {
    api.sendMessage(`🕥 Shoti is sending, please wait master`, event.threadID, event.messageID);

    // Fetch video data from your /api/get endpoint
    const response = await axios.get(`https://shoti-i32a.onrender.com/api/get`);
    
    // Ensure the response is structured as expected
    const { title, user, url } = response.data;

    let shotiPath = path.join(__dirname, "cache", "shoti.mp4");

    // Download the video
    const video = await axios.get(url, { responseType: "arraybuffer" });

    // Save the video file to the local cache
    fs.writeFileSync(shotiPath, Buffer.from(video.data, "utf-8"));

    // Send the message with the video attachment
    await api.sendMessage({body: `Here's your shoti master\n\nUsername: ${user}\nNickname: ${title}`, attachment: fs.createReadStream(shotiPath) }, event.threadID, event.messageID);
  } catch (error) {
    api.sendMessage(`Error: ${error.message}`, event.threadID, event.messageID);
  }
};

