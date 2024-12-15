const BOT = global.config.BOTNAME;

module.exports.config = {
  name: "music",
  version: "1.0.0",
  hasPermission: 0, // Corrected the spelling from "hasPermssion"
  credits: global.config.Codemaker,
  description: "Play music from YouTube",
  usePrefix: true, // Indicates the use of a prefix
  commandCategory: "media",
  cooldowns: 10, // Cooldown in seconds
  dependencies: {}
};

module.exports.run = function ({ api, event, box }) {
  // Add your command logic here
};

module.exports.run = async({api, event}) => {
	const axios = require("axios");
    const fs = require("fs-extra");
    const Innertube = require("youtubei.js");
    const request = require("request");
    let input = event.body;
    
    var text = input;     text = text.substring(7)
let data = input.split(" ");
  
if (data.length < 2) {               return api.sendMessage(" ✨𝗔𝗣𝗜 𝗯𝘆 𝐒𝟒𝐁𝟏𝐊\n🍁গানের 🎵 এর নাম লিখো?", event.threadID);
}
  

data.shift()


  const youtube = await new Innertube();
 
  const search = await youtube.search(text);
if (search.videos[0] === undefined){
api.sendMessage("Error: Invalid request.",event.threadID,event.messageID)
api.setMessageReaction("❎", event.messageID, (err) => {}, true)
}else{
api.sendMessage(`🔎𝐒𝐞𝐚𝐫𝐜𝐡𝐢𝐧𝐠 𝐟𝐨𝐫  "${text}"...\n\n🪄𝐌𝐮𝐬𝐢𝐜 🎵 𝐒𝐢𝐧𝐠 𝐛𝐲 ${BOT}`,  event.threadID,event.messageID);
api.setMessageReaction("🎶", event.messageID, (err) => {}, true)
var timeleft = 3;
var downloadTimer = setInterval(function(){
  if(timeleft <= 0){
    clearInterval(downloadTimer);

    }
  timeleft -= 1;
}, 1000);
  const stream = youtube.download(search.videos[0].id, {
    format: 'mp4',
    type: 'audio',
    audioQuality: 'lowest',
    loudnessDB: '20',
    audioBitrate: '320',
    fps: '30'
  });
  
stream.pipe(fs.createWriteStream(__dirname + `/cache/${search.videos[0].title}.mp3`))


  stream.on('start', () => {
    console.info('[DOWNLOADER]', 'Starting download now!');
  }); 
  stream.on('info', (info) => {
    console.info('[DOWNLOADER]',`Downloading ${info.video_details.title} by ${info.video_details.metadata.channel_name}`);
    console.log(info)
  });

  
  stream.on('end', () => {
  // process.stdout.clearLine();
  // process.stdout.cursorTo(0);
    console.info(`[DOWNLOADER] Downloaded`)
    
    
    var message = {
          body:(""+search.videos[0].title),
         attachment:[ 
fs.createReadStream(__dirname + `/cache/${search.videos[0].title}.mp3`)]}
           api.sendMessage(message, event.threadID,event.messageID);
  }); 
stream.on('error', (err)=> console.error('[ERROR]',err))

         stream.on('end', async () => {  
           
           if (fs.existsSync(__dirname + `/cache/${search.videos[0].title}.mp3`)) {
                                    fs.unlink(__dirname + `/cache/${search.videos[0].title}.mp3`, function (err) {
                                  if (err) console.log(err);                                        
                                  console.log(__dirname + `/cache/${search.videos[0].title}.mp3 is deleted!`);
                                                        });
                                                     }
             })
}
      } 

                                     