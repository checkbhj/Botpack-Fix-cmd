const axios = require("axios");
const API = global.config.ApiUrl;

module.exports.config = {
    name: "meta",
    version: "1.0",
    hasPermission: 0,
    credits: global.config.Codemaker,
    description: "ask banglish",
    usePrefix: true, // Indicates the use of a prefix
    usages: "Message",
    commandCategory: "ai",
    cooldowns: 0
};

module.exports.run = async ({ api, event, args }) => {
    try {
        let message = args.join(" ");
        if (!message) {
            return api.sendMessage(`⭓ 𝐇𝐢, 𝐈'𝐦 𝐌𝐞𝐭𝐚 🤖\n⭓ 𝐌𝐲 𝐨𝐟𝐟𝐢𝐜𝐢𝐚𝐥 𝐃𝐚𝐭𝐚𝐛𝐚𝐬𝐞 𝐜𝐫𝐞𝐚𝐭𝐞𝐝 𝐛𝐲 𝐒𝟒𝐁𝟏𝐊 🚀`, event.threadID, (error, info) => {
                global.client.handleReply.push({
                    name: this.config.name,
                    messageID: info.messageID,
                    author: event.senderID,
                    type: "continue"
                });
            }, event.messageID);
        }

        const response = await axios.get(`${API}/sim?type=ask&ask=${message}`);
        const respond = response.data.answer;
        api.sendMessage(respond, event.threadID, (error, info) => {
            global.client.handleReply.push({
                name: this.config.name,
                messageID: info.messageID,
                author: event.senderID,
                type: "continue"
            });
        }, event.messageID);
    } catch (error) {
        console.error("An error occurred:", error);
        api.sendMessage("Oops! Something went wrong.", event.threadID, event.messageID);
    }
};

module.exports.handleReply = async function ({ event, api, handleReply }) {
    if (handleReply.type === "continue" && event.senderID === handleReply.author) {
        const message = event.body;

        try {
            const response = await axios.get(`${API}/sim?type=ask&ask=${message}`);
            const respond = response.data.answer;
            api.sendMessage(respond, event.threadID, (error, info) => {
                global.client.handleReply.push({
                    name: this.config.name,
                    messageID: info.messageID,
                    author: event.senderID,
                    type: "continue"
                });
            }, event.messageID);
        } catch (error) {
            console.error("An error occurred:", error);
            api.sendMessage("Oops! Something went wrong.", event.threadID, event.messageID);
        }
    }
};
