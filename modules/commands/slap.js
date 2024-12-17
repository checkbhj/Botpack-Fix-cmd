const request = require("request");
const fs = require("fs")
const axios = require("axios")

module.exports.config = {
  name: "slap",
  version: "3.0.0",
  hasPermission: 0,
  credits: global.config.Codemaker,
  description: "It's just imitated because the old slap doesn't work",
  usePrefix: true, // Prefix enabled
  commandCategory: "fun",
  cooldowns: 5 // seconds to activate again
};

module.exports.run = async({ api, event, Threads, global }) => {
  var link = [ "https://i.postimg.cc/1tByLBHM/anime-slap.gif", ];
   var mention = Object.keys(event.mentions);
     let tag = event.mentions[mention].replace("@", "");
    if (!mention) return api.sendMessage("Mention 1 person that you want to slap", threadID, messageID);
   var callback = () => api.sendMessage({body:`Slapped! ${tag}` + `\n\n*sorry, i thought there's mosquito in ur ugly face*`,mentions: [{tag: tag,id: Object.keys(event.mentions)[0]}],attachment: fs.createReadStream(__dirname + "/cache/slap.gif")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/slap.gif"));  
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/slap.gif")).on("close",() => callback());
}

