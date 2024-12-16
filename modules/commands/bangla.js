module.exports.config = {
  name: "bangla",
  version: "1.0.1",
  hasPermission: 0, // Corrected the spelling from "hasPermssion"
  credits: global.config.Codemaker,
  description: "Text translation to Bangla",
  usePrefix: true, // Indicates the use of a prefix
  commandCategory: "media",
  cooldowns: 5, // Cooldown in seconds
  dependencies: {
    "request": ""
  }
};

module.exports.run = async ({ api, event, args, utils }) => {
    const request = global.nodemodule["request"];
    var content = args.join(" ");

    if (content.length == 0 && event.type != "message_reply") {
        return utils.throwError(this.config.name, event.threadID, event.messageID);
    }

    var translateThis = content.slice(0, content.indexOf(" ->"));
    var lang = content.substring(content.indexOf(" -> ") + 4);

    if (event.type == "message_reply") {
        translateThis = event.messageReply.body;
        lang = content.trim().toLowerCase();
    } else if (content.indexOf(" -> ") == -1) {
        translateThis = content.slice(0, content.length);
        lang = "bn";
    }

    return request(encodeURI(`https://translate.googleapis.com/translate_a/single?client=gtx&sl=auto&tl=bn&dt=t&q=${translateThis}`), (err, response, body) => {
        if (err) return api.sendMessage("An error has occurred!", event.threadID, event.messageID);
        var retrieve = JSON.parse(body);
        var text = '';
        retrieve[0].forEach(item => (item[0]) ? text += item[0] : '');
        var fromLang = (retrieve[2] === retrieve[8][0][0]) ? retrieve[2] : retrieve[8][0][0];
        api.sendMessage(`Translation: ${text}\n - translated from ${fromLang} to ${lang}`, event.threadID, event.messageID);
    });
}
