module.exports.config = {
  name: "balance",
  version: "1.0.2",
  hasPermission: 0, // Corrected the spelling from "hasPermssion"
  credits: global.config.Codemaker,
  description: "Check the amount of yourself or the person tagged",
  usePrefix: true, // Indicates the use of a prefix
  commandCategory: "economy",
  cooldowns: 5 // Cooldown in seconds
};

module.exports.languages = {
	"vi": {
		"sotienbanthan": "Số tiền bạn đang có: %1$",
		"sotiennguoikhac": "Số tiền của %1 hiện đang có là: %2$"
	},
	"en": {
		"sotienbanthan": "Your current balance: %1$",
		"sotiennguoikhac": "%1's current balance: %2$."
	}
}

module.exports.run = async function({ api, event, args, Currencies, getText }) {
	const { threadID, messageID, senderID, mentions } = event;

	if (!args[0]) {
		const money = (await Currencies.getData(senderID)).money;
		return api.sendMessage(getText("sotienbanthan", money), threadID);
	}

	else if (Object.keys(event.mentions).length == 1) {
		var mention = Object.keys(mentions)[0];
		var money = (await Currencies.getData(mention)).money;
		if (!money) money = 0;
		return api.sendMessage({
			body: getText("sotiennguoikhac", mentions[mention].replace(/\@/g, ""), money),
			mentions: [{
				tag: mentions[mention].replace(/\@/g, ""),
				id: mention
			}]
		}, threadID, messageID);
	}

	else return global.utils.throwError(this.config.name, threadID, messageID);
  }
	