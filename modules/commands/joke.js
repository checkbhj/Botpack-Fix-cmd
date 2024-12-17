const APIURL = global.config.ApiUrlV3;
const axios = require("axios");

module.exports.config = {
  name: "joke",
  version: "1.0.1",
  hasPermission: 0,
  credits: global.config.Codemaker,
  description: "Random pickuplines English/Tagalog",
  usePrefix: true, // Indicates the use of a prefix
  commandCategory: "fun",
  cooldowns: 5
};

module.exports.run = async ({ api, event, }) => {
const res = await axios.get(`${APIURL}/api/joke`);
  var joke = res.data.joke;
return api.sendMessage(`『 𝗛𝗲𝗿𝗲𝘀 𝘆𝗼𝘂𝗿 𝗿𝗮𝗻𝗱𝗼𝗺 𝗷𝗼𝗸𝗲 』\n${joke}`, event.threadID, event.messageID)
}
