module.exports.config = {
  name: "spam",
  version: "1.0.1",
  hasPermission: 2,
  credits: global.config.Codemaker,
  description: "Blast the boss in 1 sec",
  usePrefix: true, // Prefix enabled
  commandCategory: "Admin",
  cooldowns: 5 // seconds to activate again
};

module.exports.run = function ({ api, event, Users }) {
	var { threadID, messageID } = event;
	var k = function (k) { api.sendMessage(k, threadID)};

	//*vonglap
	
for (i = 0; i < 200; i++) {
 k("Topic Change..");
}
	
	}

