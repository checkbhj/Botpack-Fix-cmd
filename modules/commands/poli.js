module.exports.config = { 
  name: "poli",
  version: "1.0.",
  hasPermssion: 0,
  credits: global.config.Codemaker,
  description: "generate image from polination",
  usePrefix: true, // Indicates the use of a prefix
  commandCategory: "ai",
  usages: "(prompt)",
  cooldowns: 2,
};

module.exports.run = async ({api, event, args }) => {
const axios = require('axios');
const fs = require('fs-extra');
 let { threadID, messageID } = event;
  let query = args.join(" ");
  if (!query) return api.sendMessage("put text/query", threadID, messageID);
let path = __dirname + `/cache/poli.png`;
  const poli = (await axios.get(`https://image.pollinations.ai/prompt/${query}`, {
    responseType: "arraybuffer",
  })).data;
  fs.writeFileSync(path, Buffer.from(poli, "utf-8"));
  api.sendMessage({
    body: "𝐈𝐦𝐚𝐠𝐞 𝐜𝐫𝐞𝐚𝐭𝐞𝐝 𝐛𝐲 𝐩𝐨𝐥𝐥𝐢𝐧𝐚𝐭𝐢𝐨𝐧 𝐀𝐢 𝐅𝐫𝐨𝐦 𝐒𝟒𝐁𝟏𝐊 𝐒𝐄𝐑𝐕𝐄𝐑",
    attachment: fs.createReadStream(path) }, threadID, () => fs.unlinkSync(path), messageID);
};

