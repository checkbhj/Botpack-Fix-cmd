module.exports.config = {
  name: "speedtest",
  version: "1.0.0",
  hasPermission: 0,
  credits: global.config.Codemaker,
  description: "Test network speed",
  usePrefix: true, // Prefix enabled
  commandCategory: "system",
  cooldowns: 15,
  dependencies: {
		"fast-speedtest-api": ""
	}
};

module.exports.run = async function({ api, event }) {
	try {
		const fast = global.nodemodule["fast-speedtest-api"];
		const speedTest = new fast({
			token: "YXNkZmFzZGxmbnNkYWZoYXNkZmhrYWxm",
			verbose: false,
			timeout: 10000,
			https: true,
			urlCount: 5,
			bufferSize: 8,
			unit: fast.UNITS.Mbps
		});
		const resault = await speedTest.getSpeed();
		return api.sendMessage(
			"result speed test" + 
			"\n- Speed: " + resault + " Mbps",
			event.threadID, event.messageID
		);
	}
	catch {
		return api.sendMessage("Can't speedtest right now, try again later!", event.threadID, event.messageID);
	}
}
