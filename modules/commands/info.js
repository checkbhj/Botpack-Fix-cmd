module.exports.config = {
  name: "info",
  version: "1.0.1",
  hasPermission: 0, // Corrected the spelling from "hasPermssion"
  credits: global.config.Codemaker, // Don't change the credits
  description: "Admin and Bot info.",
  usePrefix: true, // Indicates the use of a prefix
  commandCategory: "admin",
  cooldowns: 1, // Cooldown in seconds
  dependencies: {
    "request": "",
    "fs-extra": "",
    "axios": ""
  }
};

module.exports.run = async function({ api,event,args,client,Users,Threads,__GLOBAL,Currencies }) {
const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
const time = process.uptime(),
		hours = Math.floor(time / (60 * 60)),
		minutes = Math.floor((time % (60 * 60)) / 60),
		seconds = Math.floor(time % 60);
const moment = require("moment-timezone");
var juswa = moment.tz("Asia/Dhaka").format("『D/MM/YYYY』 【HH:mm:ss】");
api.sendMessage({body:`꧁☬𝗕𝗢𝗧 𝗗𝗘𝗩𝗘𝗟𝗢𝗣𝗘𝗥 𝗜𝗡𝗙𝗢☬꧂

❗𝗡𝗼𝘁𝗲: 𝗧𝗵𝗶𝘀 𝗕𝗢𝗧 𝗶𝘀 𝗱𝗲𝘃𝗲𝗹𝗼𝗽𝗲𝗱 𝗯𝘆 𝐒𝐀𝚰𝐌𝐔𝐌 𝐒𝐀𝐁𝚰𝐊

❋𝗕𝗼𝘁 𝗖𝗼𝗱𝗲: 𝗡𝗼𝗱𝗲 𝗝𝗦
❋𝗕𝗼𝘁 𝗡𝗮𝗺𝗲: ${global.config.BOTNAME}
❋𝗕𝗼𝘁 𝗣𝗿𝗲𝗳𝗶𝘅: ${global.config.PREFIX}
❋𝗕𝗼𝘁 𝗖𝗵𝗶𝗽: Intel.
❋𝗕𝗼𝘁 𝗢𝘄𝗻𝗲𝗿: https://www.facebook.com/100071575183469

❯❯❯❯❯❯ 𝗦𝗘𝗧𝗨𝗣❗
✬𝗧𝗶𝗺𝗲: ${juswa} 
✬𝗕𝗼𝘁 𝘀𝘁𝗮𝗿𝘁𝗲𝗱: ${hours}:${minutes}:${seconds}.\n\n✬𝗡𝗼𝘁𝗲: ${global.config.BOTNAME} 𝗶𝘀 𝗻𝗼𝘁 𝗮 𝘀𝗶𝗺𝗽𝗹𝗲 𝗯𝗼𝘁, 𝗧𝗵𝗶𝘀 𝗮𝗻 𝗔.𝗶 𝗕𝗼𝘁 ..⚡`,attachment: fs.createReadStream(__dirname + "/noprefix/S4B1K-COVER.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/noprefix/c.jpg")); 
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/juswa.jpg")).on("close",() => callback());
   };;
   