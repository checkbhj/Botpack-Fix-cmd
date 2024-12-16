const APIURL = global.config.ApiUrlV3;
const axios = require("axios");
const cron = require("node-cron");

module.exports.config = {
    name: "bible",
    version: "9.0.8",
    hasPermssion: 0,
    credits: global.config.Codemaker,
    description: "Retrieve a random Bible verse.",
    usePrefix: true, // Indicates the use of a prefix
    commandCategory: "bible study",
    usages: "",
    cooldowns: 0,
};

module.exports.run = async function ({ api, event }) {
    try {
        const response = await axios.get(`${APIURL}/bible`);
        const result = response.data.eugene;
        api.sendMessage(`Random bible verse\n\n${result}`, event.threadID, event.messageID);
    } catch (error) {
        api.sendMessage(`An error occurred while fetching the bible verse.\n${error}`, event.threadID, event.messageID);
        console.error("Error retrieving Bible verse:", error);
    }

};
