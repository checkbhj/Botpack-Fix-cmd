module.exports.config = {
  name: "ip",
  version: "1.0.0",
  hasPermission: 0,
  credits: global.config.Codemaker,
  description: "View your ip information or other ip",
  usePrefix: true, // Set to true to enable the use of prefix while false if not.
  commandCategory: "information",
  cooldowns: 5, // seconds to activate again
};

module.exports.run = async function({ api, args, event, __GLOBAL }) {
  const timeStart = Date.now();
  
    const axios = require("axios");
  if (!args[0]) {api.sendMessage("Please enter the ip you want to check",event.threadID, event.messageID);}
  else {
var infoip = (await axios.get(`http://ip-api.com/json/${args.join(' ')}?fields=66846719`)).data;
       if (infoip.status == 'fail')
         {api.sendMessage(`Error! An error occurred. Please try again later: ${infoip.message}`, event.threadID, event.messageID)}
          else {
            /////////////////
          //////////////////
 api.sendMessage({body:`======${(Date.now()) - timeStart}ms=====
 🗺️Continent: ${infoip.continent}
🏳️Nation: ${infoip.country}
🎊Country Code: ${infoip.countryCode}
🕋Area: ${infoip.region}
⛱️Region/State: ${infoip.regionName}
🏙️City: ${infoip.city}
🛣️District: ${infoip.district}
📮ZIP code: ${infoip.zip}
🧭Latitude: ${infoip.lat}
🧭Longitude: ${infoip.lon}
⏱️Timezone: ${infoip.timezone}
👨‍✈️Organization Name: ${infoip.org}
💵Currency unit: ${infoip.currency}
`,location: {
				latitude: infoip.lat,
				longitude: infoip.lon,
				current: true
			}}
,event.threadID, event.messageID);}
        }
    
                  }

  
  
  
  
  
  

  