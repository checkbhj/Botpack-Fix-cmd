const APIURL = global.config.ApiUrlV3;
const fs = require('fs');
const axios = require('axios');
const path = require('path');

module.exports.config = {
    name: "removebg",
    version: "9.0.5",
    hasPermission: 0,
    credits: global.config.Codemaker,
    usePrefix: true, // Indicates the use of a prefix
    description: "Remove background from an image",
    commandCategory: "tools",
    usages: "removebg [reply a photo]",
    cooldowns: 7,
};

module.exports.run = async function ({ api, event, args }) {
    const { sendMessage: reply } = api;
    try {
        let photo;
        if (event.messageReply && event.messageReply.attachments.length > 0) {
            photo = event.messageReply.attachments[0].url;
        } else {
            return reply("⚠️ | Please reply to an image to remove the background", event.threadID, event.messageID);
        }

        reply("⏳ | Removing the background image, please wait...", event.threadID, event.messageID);

        const response = await axios.get(`${APIURL}/removebg?input=${encodeURIComponent(photo)}`, { responseType: 'arraybuffer'});
        const image = response.data;

        const imagePath = path.join(__dirname, "cache", "removebg.png");

        fs.writeFileSync(imagePath, Buffer.from(image), 'binary');

        await reply({ body: "✅ | Successfully removed the background", attachment: fs.createReadStream(imagePath) }, event.threadID, event.messageID);
    } catch (error) {
        reply(`⚠️ | Error occurred while removing the background\n${error}`, event.threadID, event.messageID);
    }
};
