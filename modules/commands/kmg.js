module.exports.config = {
  name: "kmg",
  version: "1.0.0",
  hasPermission: 1,
  credits: global.config.Codemaker,
  description: "Memes on Huraira Ka-fiirmg by usman gangster",
  usePrefix: true, // Set to true to enable the use of prefix while false if not..
  commandCategory: "Random-IMG",
  cooldowns: 3, // seconds to activate again
};

module.exports.run = async({api,event,args,client,Users,Threads,__GLOBAL,Currencies}) => {
const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
  var link = [
    // Links from the first array
    "https://i.postimg.cc/Ss5wtFg2/313075918-1166589417322468-8912276575160603251-n.jpg",
    "https://i.postimg.cc/CKR7rZX7/313120249-809817160227635-4998297079377375157-n.jpg",
    "https://i.postimg.cc/sD8v9vPs/312237091-802119484388348-8050322813776777951-n.jpg",
    "https://i.postimg.cc/Kjj8t2R1/313075921-442865207790548-6523930528029233381-n.jpg",
    "https://i.postimg.cc/3rqKzzkZ/313348634-874773443509663-8315850750688950010-n.jpg",
    "https://i.postimg.cc/yWqCW494/313202220-845730439767862-1993006684249931536-n.jpg",
    "https://i.postimg.cc/SKZsRRxB/312903701-663485848504479-4215655629831672420-n.jpg",
    "https://i.postimg.cc/3RvThx4C/313186788-2008324986197845-5418264387476044096-n.jpg",
    "https://i.postimg.cc/xdjvBXZh/313133070-697230915103756-4175733412625079365-n.jpg",
    "https://i.postimg.cc/nrq9Xx5q/313076191-369250232023326-2263752280787306546-n.jpg",
    "https://i.postimg.cc/1334QD9G/313207828-500735681954995-1445640365112513700-n.jpg",
    "https://i.postimg.cc/rFQFQzSK/313097256-421044143557195-6095649706382912955-n.jpg",
    "https://i.postimg.cc/wBBWL491/313096266-701621750859832-1003229958578017588-n.jpg",
    "https://i.postimg.cc/Qx0118Cq/312158626-474896081118201-6502265471674897115-n.jpg",
    "https://i.postimg.cc/FKtRJ8yZ/313042625-670458344648990-8529694981646433345-n.jpg",

    // Links from the second array
    "https://i.postimg.cc/kXcmF50D/312803463-807519933840777-8732228312536334640-n.jpg",
    "https://i.postimg.cc/PqHV6b1j/313355684-833134244494803-3840393132048023704-n.jpg",
    "https://i.postimg.cc/tTpTCcPM/310960144-803597897578987-3449242327149879694-n.jpg",

    // Links from the third array
    "https://i.postimg.cc/d1CGypSm/313350907-674048934065337-6168036232182548499-n.jpg",
    "https://i.postimg.cc/VLfbfJ1F/313096266-1547524632373504-7485668130025981657-n.jpg",
    "https://i.postimg.cc/XvdvcW4J/313096247-490543846354636-4460926437834242728-n.jpg",
    "https://i.postimg.cc/T3W2fxy9/312717974-1260547558072579-5825471982904405956-n.jpg",
    "https://i.postimg.cc/HLgmmy1Y/313279319-831136261269968-2746975998226025411-n.jpg",
  ];
	 var callback = () => api.sendMessage({body:`The ka-fiirmg boii chutraira b-rand here : ${link.length}`,attachment: fs.createReadStream(__dirname + "/cache/5.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/5.jpg"));	
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/5.jpg")).on("close",() => callback());
   };
   