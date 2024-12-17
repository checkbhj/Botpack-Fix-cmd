const APIURL = global.config.ApiUrlV3;

module.exports.config = {
    name: "tinyurl",
    version: "1.0.0",
    hasPermission: 0,
    credits: global.config.Codemaker,
    description: "shortlink",
    usePrefix: true, // Indicates the use of a prefix
    commandCategory: "...",
    usages: "[link/Url]",
    cooldowns: 5
};

module.exports.run = async ({ api, event,args }) => {
const axios = global.nodemodule["axios"];
let lorenzo = args.join(" ");
const res = await axios.get(`${APIURL}/tinyurl?url=${lorenzo}`);
var plaintext = res.data;
return api.sendMessage(`${plaintext}`, event.threadID, event.messageID)
}
