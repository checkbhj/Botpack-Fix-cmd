const APIURL = global.config.ApiUrlV3;
const axios = require('axios');

module.exports.config = {
 name: "jejemon",
 version: "9",
 credits: global.config.Codemaker,
 hasPermssion: 0,
 description: "convert into jj typings",
 usePrefix: true, // Indicates the use of a prefix
 commandCategory: "fun",
 usages: "jejemon [text]",
 cooldowns: 10,
};
module.exports.run = async function ({api, event, args }) {
try {
const text = args.join(" ");
if(!text) {
api.sendMessage(`/jejemon <text>`, event.threadID);
return;
}

const response = await axios.get(`${APIURL}/jeje?text=${encodeURIComponent(text)}`);
const message = response.data.jejemon;
api.sendMessage(message, event.threadID);
} catch (error) {
api.sendMessage(`there's an error later hehe`, event.threadID);
console.log(error);
}
};
