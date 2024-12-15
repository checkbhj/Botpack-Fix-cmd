module.exports.config = {
  name: "goiadmin",
  version: "1.0.0",
  hasPermission: 0, // Corrected the spelling from "hasPermssion"
  credits: global.config.Codemaker,
  description: "Bot will reply when mentioning any admin",
  usePrefix: false, // Indicates the use of a prefix
  commandCategory: "noprefix",
  cooldowns: 2 // Cooldown in seconds
};

module.exports.run = function ({ api, event, box }) {
  // Add your command logic here
};

module.exports.handleEvent = function({ api, event }) {
  if (event.senderID !== "100071575183469","100071575183469",
      "100071575183469") {
    var aid = ["100071575183469","100071575183469","100071575183469"];
    for (const id of aid) {
    if ( Object.keys(event.mentions) == id) {
      var msg = ["Keep stop, Don't mention my Boss!","Don't mention my boss 😕!","Please don't mention him!","I will slap 👋 you and tell you not to mention my boss","My boss is busy to writing code!",];
      return api.sendMessage({body: msg[Math.floor(Math.random()*msg.length)]}, event.threadID, event.messageID);
    }
    }}
};
module.exports.run = async function({}) {
}