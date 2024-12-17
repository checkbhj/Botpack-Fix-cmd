module.exports.config = {
  name: "good morning",
  version: "10.0.2",
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
	if (event.body.indexOf("Gm")==0 || event.body.indexOf("Mrng")==0 || event.body.indexOf("GM")==0 ||
event.body.indexOf("Good Morning")==0 ||	
event.body.indexOf("🌅")==0 ||
event.body.indexOf("🌄")==0 ||    event.body.indexOf("gm")==0 || 
event.body.indexOf("🌇")==0 ||
event.body.indexOf("🌞")==0 ||	  
event.body.indexOf("শুভ সকাল")==0 ||
event.body.indexOf("সকাল")==0 ||
event.body.indexOf("ঘুম থেকে উঠলাম")==0 ||
event.body.indexOf("☀️")==0 ||	    event.body.indexOf("morning")==0 || event.body.indexOf("Morning")==0 || event.body.indexOf("Good morning")==0 || event.body.indexOf("Good Morning")==0 || event.body.indexOf("good morning")==0 || event.body.indexOf("GOOD MORNING")==0 ) { 
		var msg = {
				body: `<3 GOOD MORNING 🌞🌄 TOO MY FRIEND, ${name} ❤️`
			}
			api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("❤️", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

      }
      