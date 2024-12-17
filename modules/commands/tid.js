const request = require('request');
const fs = require('fs')

module.exports.config = {
  name: "tid",
  version: "1.0.0",
  hasPermission: 0,
  credits: global.config.Codemaker,
  description: "Check the chat information.",
  usePrefix: true, // Prefix enabled
  commandCategory: "group",
  usages: "tid",
  cooldowns: 5, // seconds to activate again
  dependencies: ["request","fs"]
};

module.exports.run = async({api,event,args,client,Users,Threads,__GLOBAL,Currencies}) => {
	let threadInfo = await api.getThreadInfo(event.threadID);
    
  return api.sendMessage(`${threadInfo.threadID}`, event.threadID);
}
