module.exports.config = {
  name: "screenshot",
  version: "1.0.0",
  hasPermission: 0,
  credits: global.config.Codemaker,
  description: "Take a screenshot of a website (NOT ALLOW NSFW PAGE)",
  usePrefix: true, // Prefix enabled
  commandCategory: "utilities",
  cooldowns: 5,
    dependencies: {
        "fs-extra": "",
        "axios": "",
    }
};

module.exports.run = async ({ event, api, args }) => {
    const axios = require('axios');
    const fs = require('fs-extra');
    const { threadID, messageID } = event;

    // Validate input
    if (!args[0]) {
        return api.sendMessage("Please provide a valid website URL.", threadID, messageID);
    }

    const url = args[0];
    const dimension = args[1] || "1024x768"; // Default dimension if not provided

    // Validate dimension format
    if (!/^\d+x\d+$/.test(dimension)) {
        return api.sendMessage("Invalid dimension format. Use widthxheight (e.g., 1024x768).", threadID, messageID);
    }

    const filePath = __dirname + `/cache/screenshot.png`;

    try {
        // Fetch screenshot from the API
        const response = await axios.get(`https://s4b1k-api-uj42.onrender.com/screenshot`, {
            params: { url, dimension },
            responseType: "arraybuffer",
        });

        // Save screenshot to a file
        fs.writeFileSync(filePath, Buffer.from(response.data, "binary"));

        // Send the screenshot as an attachment
        api.sendMessage(
            { 
                body: `Here's the screenshot of ${url} with dimensions ${dimension}.`,
                attachment: fs.createReadStream(filePath),
            },
            threadID,
            () => fs.unlinkSync(filePath),
            messageID
        );
    } catch (error) {
        console.error(error);
        return api.sendMessage(
            "Failed to retrieve the screenshot. Please check the URL and try again.",
            threadID,
            messageID
        );
    }
};
