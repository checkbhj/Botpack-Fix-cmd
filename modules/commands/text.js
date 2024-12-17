const APIURL = global.config.ApiUrlX;
//const APIKEY = "SAKI-BIN-SWT56X";

module.exports.config = {
  name: "text",
  version: "1.0.0",
  hasPermission: 0,
  credits: global.config.Codemaker,
  description: "Design",
  usePrefix: true, // Prefix enabled
  commandCategory: "edit",
  cooldowns: 10, // seconds to activate again
  usages: "(text)"
};

module.exports.run = async function ({ api, event, args }) {
  const axios = require("axios");
  const fs = require("fs-extra");
  const qs = require("querystring");
  const moment = require("moment");
	var time= moment.tz("Asia/Dhaka").format("LLLL");
  
  const number = args[0];
  const text = args.slice(1).join("");

  if (!number || isNaN(number)) {
    return api.sendMessage("❗Use /text [no.] [text]\n❗Example:\n  /text 5 name\nTotal Text limit 10", event.threadID, event.messageID);
  }

  const apiEndpoint = `/ephoto?number=${number}&text=${text}`;
  const pathSave = __dirname + `/cache/server2.png`;

  api.sendMessage("", event.threadID, event.messageID);

  axios
    .get(APIURL + apiEndpoint, { responseType: "arraybuffer" })
    .then((data) => {
      const imageBuffer = data.data;
      fs.writeFileSync(pathSave, Buffer.from(imageBuffer));
      api.sendMessage(
        {
    body: `✅ | Here is your editz✨`,
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
      return api.sendMessage("ERROR ❌\nServer Busy...", event.threadID, event.messageID);
    });
};
