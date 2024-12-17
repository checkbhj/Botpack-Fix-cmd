module.exports.config = {
  name: "jojo",
  version: "1.0.1",
  hasPermission: 0,
  credits: global.config.Codemaker,
  description: "",
  usePrefix: true, // Set to true to enable the use of prefix while false if not.
  commandCategory: "fun",
  cooldowns: 0, // seconds to activate again
};

module.exports.run = async ({ api, event,args }) => {  {

    const fs = global.nodemodule["fs-extra"];
    const request = global.nodemodule["request"];
   const { threadID, messageID, senderID, body } = event;
  if (args.join().indexOf('@') !== -1){ var id = Object.keys(event.mentions) }
      else var id = args[0] || senderID;
      if(event.type == "message_reply") { var id = event.messageReply.senderID }
   var callback = () => api.sendMessage({attachment: fs.createReadStream(__dirname + "/cache/biden.png")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/biden.png"),event.messageID);
   return request(encodeURI(`https://api.reikomods.repl.co/canvas/jojo?uid=${id}`)).pipe(fs.createWriteStream(__dirname+'/cache/biden.png')).on('close',() => callback());     
}}
