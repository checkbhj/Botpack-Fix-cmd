module.exports.config = {
  name: "tingu",
  version: "1.0.0",
  hasPermission: 1,
  credits: global.config.Codemaker,
  description: "Tingu Yateem's Servant",
  usePrefix: true, // Prefix enabled
  commandCategory: "Random-IMG",
  usages: "panclose",
  cooldowns: 3, // seconds to activate again
  dependencies: {
    "request":"",
    "fs-extra":"",
    "axios":""
  }
};

module.exports.run = async({api,event,args,client,Users,Threads,__GLOBAL,Currencies}) => {
const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
  var link = [
"https://i.postimg.cc/SRdzTw3b/312640219-647646103620246-7656632209624669913-n.jpg",
    "https://i.postimg.cc/Cxkn9BW4/313129289-474412727833193-7811825352330615166-n.jpg",
    "https://i.postimg.cc/XNsPyX1x/313196271-647437403710432-6441029260699032993-n.jpg",
    "https://i.postimg.cc/htTMMGsk/313024734-837603220700079-6051823185341788720-n.jpg",
    "https://i.postimg.cc/50TnnFcM/312403795-566950285194770-2243770510632479324-n.jpg",
  ];
	 var callback = () => api.sendMessage({body:`Tingu's servant Rencho alias Ubaid. : ${link.length}`,attachment: fs.createReadStream(__dirname + "/cache/5.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/5.jpg"));	
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/5.jpg")).on("close",() => callback());
   };
   