const APIURL = global.config.ApiUrl;
const BOT = global.config.BOTNAME;
const axios = require('axios');
const fs = require('fs');

module.exports.config = {
    name: "spotify",
    version: "1.0.0",
    hasPermision: 0,
    credits: global.config.Codemaker, 
    description: "Search and play music from Spotify",
    usePrefix: true, // Indicates the use of a prefix
    commandCategory: "spotify",
    usage: "[song name]",
    cooldowns: 5,
    usages: "[song name]",
    cooldown: 5,  
};

module.exports.run = async function ({ api, event, args }) {
    const listensearch = encodeURIComponent(args.join(" "));
    const apiUrl = APIURL +`/api/spotify?keyword=${listensearch}`;

    if (!listensearch) return api.sendMessage("Please provide the name of the song you want to search.", event.threadID, event.messageID);

    try {
        api.sendMessage("🔍🔍𝑺𝒆𝒂𝒓𝒄𝒉𝒊𝒏𝒈 𝒇𝒐𝒓 𝒚𝒐𝒖𝒓 𝒎𝒖𝒔𝒊𝒄 🎶 𝒐𝒏 𝑺𝒑𝒐𝒕𝒊𝒇𝒚. 𝑷𝒍𝒆𝒂𝒔𝒆 𝒘𝒂𝒊𝒕...", event.threadID, event.messageID);

        const response = await axios.get(apiUrl);
        const { trackName, artist, album, previewUrl } = response.data;

        if (trackName) {
            const filePath = `${__dirname}/cache/${event.senderID}.mp3`;
            const writeStream = fs.createWriteStream(filePath);

            const audioResponse = await axios.get(previewUrl, { responseType: 'stream' });

            audioResponse.data.pipe(writeStream);

            writeStream.on('finish', () => {
                api.sendMessage({
                    body: `𝑺𝒑𝒐𝒕𝒊𝒇𝒚 𝑴𝒖𝒔𝒊𝒄 🎶 𝑫𝒆𝒕𝒂𝒊𝒍𝒔🎼\n\n🎶 𝑴𝒖𝒔𝒊𝒄: ${trackName}\n👤 𝑨𝒓𝒕𝒊𝒔𝒕: ${artist}\n📂 𝑨𝒍𝒃𝒖𝒎: ${album}\n\n𝑺𝒑𝒐𝒕𝒊𝒇𝒚 𝑴𝒖𝒔𝒊𝒄👨‍🎤 𝑩𝒚 ${BOT}`,
                    attachment: fs.createReadStream(filePath),
                }, event.threadID, () => fs.unlinkSync(fileh), event.messageID);
            });
        } else {
            api.sendMessage("❓ 𝑺𝒐𝒓𝒓𝒚, 𝒄𝒐𝒖𝒍𝒅𝒏'𝒕 𝒇𝒊𝒏𝒅 𝒕𝒉𝒆 𝒓𝒆𝒒𝒖𝒆𝒔𝒕𝒆𝒅 𝒎𝒖𝒔𝒊𝒄 𝒐𝒏 𝑺𝒑𝒐𝒕𝒊𝒇𝒚.", event.threadID);
        }
    } catch (error) {
        console.error(error);
        api.sendMessage("🚧 𝑨𝒏 𝒆𝒓𝒓𝒐𝒓 𝒐𝒄𝒄𝒖𝒓𝒓𝒆𝒅 𝒘𝒉𝒊𝒍𝒆 𝒑𝒓𝒐𝒄𝒆𝒔𝒔𝒊𝒏𝒈 𝒚𝒐𝒖𝒓 𝒓𝒆𝒒𝒖𝒆𝒔𝒕.", event.threadID);
    }
};
