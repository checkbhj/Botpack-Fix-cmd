const APIURL = global.config.ApiUrlV3;

module.exports.config = {
  name: "geminipro",
  version: "1.0.0",
  hasPermission: 0,
  credits: global.config.Codemaker,
  description: "Talk to geminipro (conversational)",
  usePrefix: global.config.prefixstatus, // Set dynamically based on the prefix status
  commandCategory: "ai",
  cooldowns: 5, // seconds to activate again
};

module.exports.run = async function ({ api, event, args }) {
  const axios = require("axios");
  let prompt = args.join(" "),
    uid = event.senderID,
    url;
  if (!prompt) return api.sendMessage(`Please enter a prompt.`, event.threadID);
  api.sendTypingIndicator(event.threadID);
  try {
    const geminiApi = `${APIURL}/geminipro`;
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
