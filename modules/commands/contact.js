module.exports.config = {
  name: "contact",
  version: "1.0.0",
  hasPermssion: 0,
  credits: global.config.Codemaker,
  description: "Share a contact of a certain userID",
  usePrefix: true, 
  commandCategory: "message",
  cooldowns: 5 
};

module.exports.run = function ({ api, event }) {
  api.shareContact("Hello this is your contact!", event.senderID, event.threadID, (err, data) => {
    if (err) console.log(err);
  })
};