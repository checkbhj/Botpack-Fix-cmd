module.exports.config = {
  name: "miss you",
  version: "7.3.1",
  hasPermission: 0,
  credits: global.config.Codemaker,
  description: "Just Respond",
  usePrefix: false, // Set to true to enable the use of prefix while false if not.
  commandCategory: "noprefix",
  cooldowns: 5, // seconds to activate again
};

module.exports.handleEvent = async function({ api, event, client, Users, __GLOBAL }) {
	var { threadID, messageID } = event;
	var name = await Users.getNameUser(event.senderID);
	if (event.body.indexOf("miss you")==0 || event.body.indexOf("Miss You")==0 || event.body.indexOf("Miss you")==0 || event.body.indexOf("miss you so much")==0 || event.body.indexOf("Miss you so much")==0 || event.body.indexOf("MISS YOU")==0 || event.body.indexOf("Miss")==0 || event.body.indexOf("miss")==0 || event.body.indexOf("Miss uhh")==0 || event.body.indexOf("Miss u")==0 ) { 
		var msg = {
				body: `<3~Miss you too from depth of my heart ${name} ❤️`
			}
			api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("❤️", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

    }
    