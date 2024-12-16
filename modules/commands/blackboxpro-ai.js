const APIURL = global.config.ApiUrlV3;

module.exports.config = {
  name: "blackboxpro",
  version: "1.0.0",
  hasPermission: 0, // Corrected the spelling from "hasPermssion"
  credits: global.config.Codemaker,
  description: "Talk to blackbox (conversational)",
  usePrefix: true, // Uses dynamic prefix status
  commandCategory: "ai",
  cooldowns: 5, // Cooldown in seconds
  usages: "blackboxpro [ask]"
};

module.exports.run = async function ({ api, event, args }) {
const axios = require("axios");
let prompt = args.join(" "),
uid = event.senderID,
url;
if (!prompt) return api.sendMessage(`Please enter a prompt.`, event.threadID);
api.sendTypingIndicator(event.threadID);
try {
const geminiApi = `${APIURL}/blackboxpro`;
if (event.type == "message_reply") {
if (event.messageReply.attachments[0]?.type == "photo") {
url = encodeURIComponent(event.messageReply.attachments[0].url);
const res = (await axios.get(`${geminiApi}?ask=${encodeURIComponent(prompt)}`)).data;
return api.sendMessage(res.Response, event.threadID);
} else {
return api.sendMessage('Please reply to an image.', event.threadID);
}
}
const response = (await axios.get(`${geminiApi}?ask=${encodeURIComponent(prompt)}`)).data;
return api.sendMessage(response.Response, event.threadID);
} catch (error) {
console.error(error);
return api.sendMessage('❌ | An error occurred. You can try typing your query again or resending it. There might be an issue with the server that\'s causing the problem, and it might resolve on retrying.', event.threadID);
}
};
