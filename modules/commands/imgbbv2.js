module.exports.config = {
    name: 'imgbbv2',
    version: '1.0.0',
    hasPermssion: 0,
    credits: '',
    description: 'Upload image to IMGBB',
    usePrefix: true, // Indicates the use of a prefix
    commandCategory: 'Tools',
    usages: 'Reply to an image',
    cooldowns: 2,
};

const axios = require('axios');
const fs = require('fs-extra');
const path = require('path');

module.exports.run = async function({ api, event }) {
    try {
        if (event.type !== "message_reply") {
            return api.sendMessage("𝙔𝙤𝙪 𝙈𝙪𝙨𝙩 𝙍𝙚𝙥𝙡𝙮 𝙏𝙤 𝘼𝙣 𝙄𝙢𝙖𝙜𝙚🖼️", event.threadID, event.messageID);
        }

        if (!event.messageReply.attachments || event.messageReply.attachments.length == 0) {
            return api.sendMessage("𝙍𝙚𝙥𝙡𝙮 𝙏𝙤 𝘼𝙣 𝙄𝙢𝙖𝙜𝙚🖼️", event.threadID, event.messageID);
        }

        if (event.messageReply.attachments[0].type !== "photo") {
            return api.sendMessage("𝙏𝙝𝙞𝙨 𝙄𝙨 𝙉𝙤𝙩 𝘼 𝙋𝙝𝙤𝙩𝙤🥺", event.threadID, event.messageID);
        }

        const content = event.messageReply.attachments[0].url;
        const inputPath = path.resolve(__dirname, 'cache', 'upload_image.png');

        const imageResponse = await axios.get(content, { responseType: 'arraybuffer' });
        fs.writeFileSync(inputPath, imageResponse.data);

        const formData = new FormData();
        formData.append('image', fs.createReadStream(inputPath));
        formData.append('key', '9de96643db8886de209ae6608261355b');

        const uploadResponse = await axios.post('https://api.imgbb.com/1/upload', formData, {
            headers: {
                ...formData.getHeaders(),
            },
        });

        if (uploadResponse.data.success) {
            const imageUrl = uploadResponse.data.data.url;
            api.sendMessage(`Image uploaded successfully! URL: ${imageUrl}`, event.threadID, event.messageID);
        } else {
            api.sendMessage("𝙁𝙖𝙞𝙡𝙚𝙙 𝙩𝙤 𝙪𝙥𝙡𝙤𝙖𝙙 𝙞𝙢𝙖𝙜𝙚. Please try again.", event.threadID, event.messageID);
        }

        // Cleanup the temporary image file
        fs.unlinkSync(inputPath);
    } catch (error) {
        console.error('Error:', error);
        api.sendMessage("𝙎𝙤𝙧𝙧𝙮, 𝙖𝙣 𝙚𝙧𝙧𝙤𝙧 𝙤𝙘𝙘𝙪𝙧𝙚𝙙.", event.threadID, event.messageID);
    }
};
