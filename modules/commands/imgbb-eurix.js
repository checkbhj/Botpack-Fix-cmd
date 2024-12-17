const APIURL = global.config.ApiUrlV3;
const axios = require("axios");

module.exports.config = {
  name: "imgbb", 
  version: "9",
  credits: global.config.Codemaker,
  description: "Upload to imgbb",
  usePrefix: true, // Indicates the use of a prefix
  usages: "imgur [ reply a photo ]",
  commandCategory: "media",
  cooldowns: 0, 
  hasPermssion: 0,
};

module.exports.run = async function ({ api, event }) {
  const attachments = event.messageReply.attachments;

  if (!attachments || !attachments.length) {
    api.sendMessage(`Missing image`, event.threadID, event.messageID);
    return;
  }

  const imageLinks = attachments.map(attachment => attachment.url);
  const imgurLinks = [];

  try {
    for (const image of imageLinks) {
      const response = await axios.get(`${APIURL}/imgbb?link=${encodeURIComponent(image)}`);
      const uploadedImages = response.data.uploaded.image;
 
      imgurLinks.push(uploadedImages);
    }
    api.sendMessage(`Uploaded images\nLink:\n${imgurLinks.join("\n")}`, event.threadID, event.messageID);
  } catch(error) {
    console.log(error);
    api.sendMessage(`${error}`, event.threadID, event.messageID);
  }
};

