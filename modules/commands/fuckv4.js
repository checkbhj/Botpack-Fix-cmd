const fs = require("fs");

module.exports.config = {
  name: "fuckv4",
  version: "1.0.1",
  hasPermission: 0,
  credits: global.config.Codemaker,
  description: "Fuck your mother",
  usePrefix: true, // Set to true to enable the use of prefix while false if not.

  commandCategory: "No command marks needed",
  cooldowns: 5, // seconds to activate again
};

module.exports.handleEvent = function({ api, event }) {
    var { threadID, messageID } = event;
    if (event.body.indexOf("fuckyou")==0 || (event.body.indexOf("pakyu")==0 || (event.body.indexOf("tanginamo")==0 || (event.body.indexOf("tanga")==0)))) {
        var msg = {
                body: "🖕",
                attachment: fs.createReadStream(__dirname + `/noprefix/fuckyou.mp4`)
            }
            return api.sendMessage(msg, threadID, messageID);
        }
    }
    module.exports.run = function({ api, event, client, __GLOBAL }) {

}
