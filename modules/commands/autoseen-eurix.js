const fs = require('fs-extra');
const pathFile = __dirname + '/cache/autoseen.txt';

module.exports.config = {
  name: "autoseen",
  version: "1.0.0",
  hasPermission: 2, // Corrected the spelling from "hasPermssion"
  credits: global.config.Codemaker,
  description: "Automatically mark messages as seen",
  usePrefix: true, // Indicates the use of a prefix
  commandCategory: "system",
  cooldowns: 0 // No cooldown
};

module.exports.handleEvent = async ({ api, event, args }) => {
  if (!fs.existsSync(pathFile)) {
    fs.writeFileSync(pathFile, 'false');
  }
  const isEnable = fs.readFileSync(pathFile, 'utf-8');
  if (isEnable == 'true') {
    api.markAsReadAll(() => {});
  }
};

module.exports.run = async ({ api, event, args }) => {
  try {
    if (args[0] == 'on') {
      fs.writeFileSync(pathFile, 'true');
      api.sendMessage('The autoseen function is now enabled for new messages.', event.threadID, event.messageID);
    } else if (args[0] == 'off') {
      fs.writeFileSync(pathFile, 'false');
      api.sendMessage('The autoseen function has been disabled for new messages.', event.threadID, event.messageID);
    } else {
      api.sendMessage('Incorrect syntax', event.threadID, event.messageID);
    }
  } catch (e) {
    api.sendMessage("Unexpected error while using autoseen function", "system", event.threadID, event.messageID);
  }
};
