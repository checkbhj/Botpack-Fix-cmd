module.exports.config = {
    name: "eval",
    version: "1.0.0",
    hasPermission: 2,
    credits: global.config.Codemaker,
    description: "Test api response",
    usePrefix: true, // Indicates the use of a prefix
    usages: "[code]",
    commandCategory: "admin",
    cooldowns: 5
};

module.exports.run = async function ({ api, args, event ,Users, Threads , message ,usersData, threadsData}) {
  function output(msg) {
    if (typeof msg == "number" || typeof msg == "boolean" || typeof msg == "function")
      msg = msg.toString();
    else if (msg instanceof Map) {
      let text = `Map(${msg.size}) `;
      text += JSON.stringify(mapToObj(msg), null, 2);
      msg = text;
    }
    else if (typeof msg == "object")
      msg = JSON.stringify(msg, null, 2);
    else if (typeof msg == "undefined")
      msg = "undefined";

    api.sendMessage(msg, event.threadID, event.messageID);
  }
  function out(msg) {
    output(msg);
  }
  function mapToObj(map) {
    const obj = {};
    map.forEach(function (v, k) {
      obj[k] = v;
    });
    return obj;
  }
  const cmd = `
  (async () => {
const dipto = require('axios');
    try {
      ${args.join(" ")}
    }
    catch(err) {
      console.log("eval command", err);
      api.sendMessage( err.stack
      , event.threadID);
    }
  })()`;
eval(cmd);
}
