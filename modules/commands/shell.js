module.exports.config = {
  name: "shell",
  version: "7.3.1",
  hasPermission: 2,
  credits: global.config.Codemaker,
  description: "Running shell",
  usePrefix: true, // Prefix enabled
  commandCategory: "System",
  cooldowns: 0,// seconds to activate again
  dependencies: {
    "child_process": ""
  }
};
module.exports.run = async function({ api, event, args, Threads, Users, Currencies, models }) {    
const { exec } = require("child_process");
const god = ["100071575183469","","",];
  if (!god.includes(event.senderID)) 
return api.sendMessage("Connected", event.threadID, event.messageID);
let text = args.join(" ")
exec(`${text}`, (error, stdout, stderr) => {
    if (error) {
        api.sendMessage(`error: \n${error.message}`, event.threadID, event.messageID);
        return;
    }
    if (stderr) {
        api.sendMessage(`stderr:\n ${stderr}`, event.threadID, event.messageID);
        return;
    }
    api.sendMessage(`stdout:\n ${stdout}`, event.threadID, event.messageID);
});
}
