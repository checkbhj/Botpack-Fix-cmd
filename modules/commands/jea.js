const APIURL = global.config.ApiUrlV3;
const axios = require("axios");

module.exports.config = {
  name: "jea",
  version: "9.0.5",
  hasPermssion: 0,
  credits: global.config.Codemaker,
  description: "Talk with jea",
  usePrefix: true, // Indicates the use of a prefix
  commandCategory: "...",
  usages: "<ask>",
  cooldowns: 0,
};
module.exports.run = async function ({api, event, args}) {
try {
const prompt = args.join(" ");
if(!prompt) {
return api.sendMessage(`${global.config.PREFIX}jea <ask>`, event.threadID, event.messageID);
}

const response = await axios.get(`${APIURL}/jea?ask=${encodeURIComponent(prompt)}`);
const result = response.data.message;
api.sendMessage(result, event.threadID, event.messageID);
} catch(error) {
api.sendMessage(`Oops something went wrong!!`, event.threadID, event.messageID);
console.log(error);
}
};
