const axios = require('axios');
const fs = require('fs');
const path = require('path');

module.exports.config = {
  name: "videoDownloader",
  version: "1.0.0",
  hasPermission: 0,
  credits: global.config.Codemaker, // Set the author or use the global config value.
  description: "Automatically downloads videos from TikTok, Facebook, and Instagram when a link is provided.",
  usePrefix: false, // Adjust this based on whether the command should use a prefix.
  commandCategory: "utility",
  cooldowns: 3, // Seconds to activate again.
  usages: "Send a TikTok, Facebook, or Instagram video link to download."
};

module.exports.handleReaction = async function({ api, event, handleReaction }) {
    try {
        if (event.userID != handleReaction.author) return;

        const { threadID } = event;

        // Start downloading the video after reaction
        await downloadVideo(handleReaction.videoUrl, threadID, api);

        // Remove the reaction handler from global data
        api.unsendMessage(handleReaction.messageID);
    } catch (e) {
        console.log(e);
    }
};

module.exports.handleEvent = async function({ api, event }) {
    const { threadID, body } = event;

    // Check if the message contains a TikTok, Facebook, or Instagram link
    const regex = /(https?:\/\/(?:[a-zA-Z0-9-]+\.)?(tiktok\.com|facebook\.com|instagram\.com)\/[^\s]+)/gi;
    const match = body.match(regex);

    if (match) {
        const videoUrl = match[0]; // Take the first matched URL

        // Notify the user and ask them to react to the message to start the download
        api.sendMessage("Video Link detected 🔗\nReact 👍 to start download", threadID, (error, messageInfo) => {
            if (error) return console.error(error);

            // Store the reaction handler data
            global.client.handleReaction.push({
                name: "videoDownloader",
                messageID: messageInfo.messageID,
                author: event.senderID,
                videoUrl: videoUrl
            });
        });
    }
};

module.exports.run = async function({ api, event }) {};
