const APIURL = global.config.ApiUrlV3;
const BOT = global.config.BOTNAME;
module.exports.config = {
  name: "sms",
  version: "1.0.0",
  hasPermssion: 0,
  credits: global.config.Codemaker,
  description: "𝗦𝗠𝗦 𝗕𝗼𝗺𝗯𝗲𝗿. 𝗔𝗽𝗽𝗹𝗶𝗰𝗮𝗯𝗹𝗲 𝗼𝗻𝗹𝘆 𝗳𝗼𝗿 𝗕𝗮𝗻𝗴𝗹𝗮𝗱𝗲𝘀𝗵𝗶 𝗻𝘂𝗺𝗯𝗲𝗿𝘀",
  usePrefix: true, // Indicates the use of a prefix
  commandCategory: "spam",
  usages: "sms number amount",
  cooldowns: 15,
  dependencies: { "axios": "" }
};

module.exports.run = async({api, event, args}) => {
	const axios = require('axios');
	if (args[0]) {
    api.sendMessage(`𝗧𝗵𝗲 𝘀𝗺𝘀 𝗯𝗼𝗺𝗯𝗶𝗻𝗴 𝗦𝘁𝗮𝗿𝘁𝗲𝗱 ....`, event.threadID, (err, info) => setTimeout(() => { api.unsendMessage(info.messageID) }, 90000));
	  let i1 = (args[0])
	  const res = await axios.get(`${APIURL}/bomber?phone=${i1}&count=10`);
	  return api.sendMessage(`𝗦𝗠𝗦 𝗯𝗼𝗺𝗯𝗶𝗻𝗴 𝗶𝘀 𝗰𝗼𝗺𝗽𝗹𝗲𝘁𝗲 𝗯𝘆 ${BOT}`, event.threadID, event.messageID)
  } else if (args.join() == "") { 
	  return api.sendMessage(`𝗧𝗼 𝗯𝗼𝗺𝗯 𝘀𝗺𝘀❟ 𝗧𝘆𝗽𝗲 ${global.config.PREFIX}𝘀𝗺𝘀 𝗮𝗻𝗱 𝘄𝗿𝗶𝘁𝗲 𝗻𝘂𝗺𝗯𝗲𝗿 𝗮𝗻𝗱 𝗻𝘂𝗺𝗯𝗲𝗿 𝘃𝗮𝗹𝘂𝗲 (𝘄𝗶𝘁𝗵𝗼𝘂𝘁 +𝟴𝟴)`, event.threadID, event.messageID)}
}
