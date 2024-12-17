const APIURL = global.config.ApiUrlV3;
const axios = require("axios");

module.exports.config = {
  name: "gpbalance",
  version: "1",
  hasPermission: 0,
  credits: global.config.Codemaker,
  description: "Fetches information using MSISDN.",
  usePrefix: true, // Set to true to enable the use of prefix while false if not.
  commandCategory: "Utilities",
  cooldowns: 0, // seconds to activate again
};

module.exports.run = async ({ api, event, args }) => {
    try {
        const msisdn = args[0];
        if (!msisdn) {
            return api.sendMessage(
                "⭓ Please provide an MSISDN. Example: /gpbalance 017",
                event.threadID,
                event.messageID
            );
        }

        // Make a GET request to the API
        const response = await axios.get(`${APIURL}/gpbalance?msisdn=${msisdn}`);
        
        if (response.data.success) {
            const {
                platform,
                accountBalance,
                ratePlan,
                mcaStatus,
                developer,
                channel
            } = response.data;

            const message = `⭓ **INFORMATION OF GP SIMℹ️**\n\n` +
                            `- **Platform**: ${platform}\n` +
                            `- **Account Balance**: ${accountBalance}\n` +
                            `- **Rate Plan**: ${ratePlan}\n` +
                            `- **MCA Status**: ${mcaStatus}\n` +
                            `- **AUTHOR**: ${developer}\n`;
            
            api.sendMessage(message, event.threadID, event.messageID);
        } else {
            api.sendMessage(
                `⭓ Failed to retrieve data. Error: ${response.data.error || "Unknown error."}`,
                event.threadID,
                event.messageID
            );
        }
    } catch (error) {
        console.error("An error occurred:", error);
        api.sendMessage(
            "Oops! Something went wrong while fetching the information.",
            event.threadID,
            event.messageID
        );
    }
};

