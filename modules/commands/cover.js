const API = global.config.ApiUrl;

module.exports.config = {
  name: "cover",
  version: "1.0.0",
  hasPermission: 0,
  credits: global.config.Codemaker,
  description: "Make a Facebook cover",
  usePrefix: true, // Set to true to enable the use of prefix while false if not.
  commandCategory: "canvas",
  usages: "name1,name2,email,phonenumber,adress,color",
  cooldowns: 10 // seconds to activate again
};

module.exports.run = async function ({ api, event, args }) {
  const axios = require("axios");
  const fs = require("fs-extra");
  const qs = require("querystring");
  const moment = require("moment");
  var time= moment.tz("Asia/Dhaka").format("LLLL");

const inputText = args.join(" ").trim().replace(/\s+/g, " ").replace(/(\s+\|)/g, "|").replace(/\|\s+/g, "|").replace(/\|/g, ",");
  const textArray = inputText.split(",");

  const text1 = textArray[0] || "";
  const text2 = textArray[1] || "";
  const text3 = textArray[2] || "";
  const text4 = textArray[3] || "";
  const text5 = textArray[4] || "";
  const color = textArray[5] || "";
  const uid = event.senderID;

  if (text1 === "") {
    return api.sendMessage("❗Example:\n/cover name1,name2,email,phonenumber,adress,color", event.threadID, event.messageID);
  }

  const apiEndpoint = `/fbcover/v1?name=${text1}&color=${color}&address=${text5}&email=${text3}&subname=${text2}&sdt=${text4}&uid=${uid}`;
  const pathSave = __dirname + `/cache/server4.png`;

  api.sendMessage("", event.threadID, event.messageID);

  axios
    .get(API + apiEndpoint, { responseType: "arraybuffer" })
    .then((data) => {
      const imageBuffer = data.data;
      fs.writeFileSync(pathSave, Buffer.from(imageBuffer));
      api.sendMessage(
        {
    body: `✅Your Cover was created by 𝐒𝟒𝐁𝟏𝐊 Server at ${time}🔖`,
          attachment: fs.createReadStream(pathSave),
        },
        event.threadID,
        () => fs.unlinkSync(pathSave)
      );
    })
    .catch((error) => {
      let err;
      if (error.response) {
        err = JSON.parse(error.response.data.toString());
      } else {
        err = error;
      }
      return api.sendMessage("ERROR ❌\n𝐒𝟒𝐁𝟏𝐊 Server Busy😓", event.threadID, event.messageID);
    });
};
