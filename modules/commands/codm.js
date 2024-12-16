  const APIURL = global.config.ApiUrlV3;
  const fs = require("fs");
  const axios = require("axios");
  const path = require("path");

  module.exports.config = {
      name: "codm",
      version: "1.9.0",
      hasPermssion: 0,
      credits: global.config.Codemaker,
      description: "Generate random Call of Duty Mobile videos",
    usePrefix: true, // Indicates the use of a prefix
      commandCategory: "other",
      usages: "[codm]",
      cooldowns: 9,
    };

  module.exports.run = async function ({ api, event }) {
      try {
        api.sendMessage(`codm is sending please wait...`, event.threadID, event.messageID);
        const response = await axios.post(`${APIURL}/codm`);
        const video = response.url;
        const username = response.username;
        const nickname = response.nickname;
const title = response.title;

        let codmPath = path.join(__dirname, "cache", "codm.mp4");

        const dl = await axios.get(video, { responseType: "arraybuffer" });

        fs.writeFileSync(codmPath, Buffer.from(dl.data, "utf-8"));

        api.sendMessage({
          body: `Username: ${username}\nNickname: ${nickname}\nTitle: ${title}`,
          attachment: fs.createReadStream(codmPath)
        }, event.threadID, event.messageID);
      } catch (err) {
        console.error(err);
        api.sendMessage(`Error occurred while processing your request.`, event.threadID, event.messageID);
      }
  };

