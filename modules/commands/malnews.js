module.exports.config = {
	name: "malnews",
	version: "1.0.0",
	hasPermission: 0,
	credits: global.config.Codemaker,
	description: "Get the latest news of anime from MyAnimeList",
	usePrefix: true, // Set to true to enable the use of prefix while false if not.
	commandCategory: "anime",
	cooldowns: 5, // seconds to activate again
};

module.exports.run = async function({ api, event }) {

const malScraper = require('mal-scraper');
	const axios = require('axios');
	const nbNews = 5

malScraper.getNewsNoDetails(nbNews)
	.then((n) => api.sendMessage("TOP 5 LATEST MAL NEWS\n\n『 1 』"+n[0].title+"\n\n『 2 』"+n[1].title+"\n\n『 3 』"+n[2].title+"\n\n『 4 』"+n[3].title+"\n\n『 5 』"+n[4].title,event.threadID,event.messageID))
	.catch((err) => console.log(err))
}
