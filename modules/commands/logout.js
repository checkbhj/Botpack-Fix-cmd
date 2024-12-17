module.exports.config = {
  name: "fblogout",
  version: "1.0.1",
  hasPermission: 2,
  credits: global.config.Codemaker,
  description: "Logout Bot Account",
  usePrefix: true, // Set to true to enable the use of prefix while false if not.
  commandCategory: "admin",
  cooldowns: 0, // seconds to activate again
};

module.exports.run = async function({ api, event })
{
api.sendMessage("Logout ...",event.threadID,event.messageID)
api.logout()
}
