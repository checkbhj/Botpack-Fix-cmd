module.exports.config = {
  name: "good night",
  version: "7.3.1",
  hasPermission: 0,
  credits: global.config.Codemaker,
  description: "Just Respond",
  usePrefix: false, // Set to true to enable the use of prefix while false if not.
  commandCategory: "no prefix",
  cooldowns: 5, // seconds to activate again
};

module.exports.handleEvent = async function({ api, event, client, Users, __GLOBAL }) {
	var { threadID, messageID } = event;
	var name = await Users.getNameUser(event.senderID);
	if (event.body.indexOf("night")==0 || event.body.indexOf("Night")==0 || event.body.indexOf("GN")==0 || event.body.indexOf("gn")==0 || event.body.indexOf("Gn")==0 || event.body.indexOf("Gd nyt")==0 || event.body.indexOf("Gd night")==0 || 
event.body.indexOf("শুভ রাত্রি")==0 ||
event.body.indexOf("শুভ রাত")==0 ||
event.body.indexOf("শুভ রাতি")==0 ||
event.body.indexOf("🌃")==0 ||
event.body.indexOf("🌌")==0 ||
event.body.indexOf("🏙️")==0 ||
event.body.indexOf("😪")==0 ||
event.body.indexOf("💤")==0 ||
event.body.indexOf("Good Night")==0 || event.body.indexOf("good night")==0 || event.body.indexOf("GOOD NIGHT")==0 || event.body.indexOf("Good night")==0 || event.body.indexOf("nyt")==0 ) { 
		var msg = {
				body: `<3 Good Night 🌉 😴...have a sweet dream ${name} ❤️`
			}
			api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("❤️", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

      }
      