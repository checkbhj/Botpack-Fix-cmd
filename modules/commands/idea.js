module.exports.config = {
  name: "idea",
  version: "1.0.0",
  hasPermission: 2, // Corrected the spelling from "hasPermssion"
  credits: global.config.Codemaker,
  description: "5 বারের জন্য ক্রমাগত বন্ধুর ট্যাগ করুন\nসেই ব্যক্তিকে আত্মা কলিং বলা যেতে পারে",
  usePrefix: true, // Indicates the use of a prefix
  allowPrefix: true, // Ensures prefix behavior is flexible
  commandCategory: "nsfw",
  cooldowns: 10, // Cooldown in seconds
  dependencies: {
    "fs-extra": "",
    "axios": ""
  }
};

module.exports.run = async function({ api, args, Users, event}) {
    var mention = Object.keys(event.mentions)[0];
    if(!mention) return api.sendMessage("আপনি কাকে জ্ঞান দিতে চান এমন 1 জনকে @ম্যানশন করতে হবে", event.threadID);
 let name =  event.mentions[mention];
    var arraytag = [];
        arraytag.push({id: mention, tag: name});
    var a = function (a) { api.sendMessage(a, event.threadID); }
a("তোমাকে কিছু উপদেশ দেওয়া হবে। মেনে চললে জীবনে অনেক উন্নতি করতে পারবে এবং মরার পর ও ভালো থাকবে।😇");
setTimeout(() => {a({body: "বিপদ-আপদের সময়,, দুনিয়ার সকল দরজা বন্ধ হয়ে গেলেও আল্লাহ তায়ালার দরজার সবসময় খুলা থাকে। 🥰🥰।" + " " + name, mentions: arraytag})}, 3000);
setTimeout(() => {a({body: "দুনিয়াতে একটি মাত্র ঘর । যার নাম “কাবা ঘর” । যার উপর দিয়ে আজ পর্যন্ত কোন পাখি বা বিমান উড়ে যেতে পারে নি। 😍.." + " " + name, mentions: arraytag})}, 5000);
setTimeout(() => {a({body: "তার জন্য কাঁদ যে তোমার চোখের জল দেখে সেও কেঁদে ফেলে, কিন্তু এমন কারো জন্য কেদোনা যে তোমার চোখের জল দেখে উপহাস করে। 🐰" + " " + name, mentions: arraytag})}, 7000);
setTimeout(() => {a({body: "সবচেয়ে কঠিন কাজ হচ্ছে নিজেকে চেনা এবং সবচেয়ে সহজ কাজ হচ্ছে অন্যদেরকে উপদেশ দেয়া। 💔!" + " " + name, mentions: arraytag})}, 9000);
setTimeout(() => {a({body: "প্রেমে ছ্যাকা খাইছেন তাকে ভুলতে পারছেন না? ৫ ওয়াক্ত সালাত আদায় করুন তার প্রতি যে ভালোবাসা ছিলো সেটা আল্লাহর প্রতি স্থাপন করুন।🥰" + " " + name, mentions: arraytag})}, 12000);
setTimeout(() => {a({body: "ডিপ্রেশনে আছেন কোনোভাবে ডিপ্রেশন কাটাতে পারছেন না। ইসলামিক ভিডিও দেখুন ওয়াজ শুনুন মন টাকে ইসলামিক কথার ভিতর নিয়ে যান তাহলে ডিপ্রেশন কেটে যাবে। " + " " + name, mentions: arraytag})}, 15000);
setTimeout(() => {a({body: "যাহা তুমি দেখাও, তার চেয়ে বেশি তোমার থাকা উচিত🤬" + " " + name, mentions: arraytag})}, 17000);
setTimeout(() => {a({body: "যা তুমি জান, তার তুলনায় কম কথা বলা উচিত।🤟" + " " + name, mentions: arraytag})}, 20000);
setTimeout(() => {a({body: "বন্ধুত্ব হোক কিংবা ভালোবাসা। টিকিয়ে রাখার দায়িত্ব কিন্তু দু'জনেরই।  🤝" + " " + name, mentions: arraytag})},23000);
setTimeout(() => {a({body: "যদি স্বপ্ন দেখতে পারো, তবে তা বাস্তবায়নও করতে পারবে।💉।" + " " + name, mentions: arraytag})}, 25000);
setTimeout(() => {a({body: "যে তোমাকে আজ অবহেলা করছে। ধৈর্য ধরো একদিন। তোমাকে তার প্রয়োজন হবেই" + " " + name, mentions: arraytag})}, 28500);
setTimeout(() => {a({body: "তাকে ছেড়ে চলে যেও না।💔 যে তোমার শত খারাপ। ব্যবহারের পরেও তোমাকে ছেড়ে যাইনি।😘 ✋" + " " + name, mentions: arraytag})},31000);
setTimeout(() => {a({body: " আল্লাহর দেখানো পথে চলুন 🥰" + " " + name, mentions: arraytag})}, 36000);
setTimeout(() => {a("~ অন্যকে গালি দেওয়া থেকে বিরত থাকুন♥️")} , 39000);
setTimeout(() => {a({body: "গার্লফ্রেন্ডকে না✌️ নিজের মা বাবাকে ভালোবাসুন✋🥰।" + " " + name, mentions: arraytag})}, 42000);

setTimeout(() => {a({body: "বলদা তুকে idea দেওয়া Complate🐰" + " " + name, mentions: arraytag})}, 50000);
}
