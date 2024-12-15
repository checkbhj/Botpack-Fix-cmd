const fs = global.nodemodule["fs-extra"];
const moment = require("moment-timezone");

module.exports.config = {
  name: "goibot",
  version: "1.0.0",
  hasPermission: 0, // Corrected the spelling from "hasPermssion"
  credits: global.config.Codemaker,
  description: "goibot",
  usePrefix: false, // Indicates the use of a prefix
  commandCategory: "noprefix",
  cooldowns: 5 // Cooldown in seconds
};

module.exports.run = function ({ api, event, box }) {
  // Add your command logic here
};

module.exports.handleEvent = async function({ api, event, args, Threads, Users }) {
  try {
    const { threadID, messageID, body, senderID } = event;

    // Ensure body exists to prevent errors
    if (!body) return;

    const time = moment.tz("Asia/Dhaka").format("HH:mm:ss L");
    const name = await Users.getNameUser(senderID);

    const responses = [
      "ASSALA-MUA-LAIKUM ki korte pari apnar jnno",
      "ডাক দিয়েন নাহ আমি বিজি।",
      "আমি বাংলাদেশ যাচ্ছি 🫣",
      "এত্ত ডাকিস কেন বিয়ে করায় দিব",
      "আমার বস আমাকে ঠিক করতেছে ডাক দিয়েন না।🥹",
      "আহা জালাইও না আমাকে",
      "এত্ত গ্রুপ এ আছি কেউ I Love you বলে নাহ",
      "এই জীবন রেখে কি লাভ যদি আমার বস হামিম এর বিয়ে করায় দিতে না পারি",
      "সব সময় ফাজলামি ভালো লাগে না",
      "আমার বস হামীম এর গফ আছে।",
      "আমাকে না ডাকি আমার বস হামীম এর সাথে তার গফ এর বিয়ে করায় দেন",
      "আমিও বিদেশ যাব",
      "তোমাকে আমার রাইতে ভালো লাগে",
      "তোমার মনটা আমারে দিয়া দাও🙈",
      "ভালবাসি তোমাকে",
      "মেয়ে হইলে ইনবক্স এ চলে আসো গু",
      "এত্ত ভালবাসা কই রাখি",
      "বেশি bot Bot করলে leave নিবো কিন্তু😒😒 ",
      "শুনবো না😼তুমি আমাকে প্রেম করাই দাও নাই🥺পচা তুমি🥺",
      "এতো ডেকো না,প্রেম এ পরে যাবো তো🙈",
      "Bolo Babu, তুমি কি আমাকে ভালোবাসো? 🙈💋",
      "বার বার ডাকলে মাথা গরম হয়ে যায় কিন্তু😑",
      "হ্যা বলো😒, তোমার জন্য কি করতে পারি😐😑?",
      "এতো ডাকছিস কেন?গালি শুনবি নাকি? 🤬",
      "I love you janu🥰",
      "আরে Bolo আমার জান ,কেমন আছো?😚 ",
      "Bot বলে অসম্মান করছি,😰😿",
      "Hop beda😾,Boss বল boss😼",
      "চুপ থাক ,নাই তো তোর দাত ভেগে দিবো কিন্তু",
      "Bot না , জানু বল জানু 😘 ",
      "বার বার Disturb করছিস কোনো😾,আমার জানুর সাথে  আছি😋",
      "এতো ডাকিস কেন🤬",
      "আমাকে ডাকলে ,আমি কিন্তু কিস করে দিবো😘 ",
      "আমারে এতো ডাকিস না আমি মজা করার mood এ নাই এখন😒",
      "হ্যাঁ জানু , এইদিক এ আসো কিস দেই🤭 😘",
      "দূরে যা, তোর কোনো কাজ নাই, শুধু bot bot করিস 😉😋🤣",
      "তোর কথা তোর বাড়ি কেউ শুনে না ,তো আমি কোনো শুনবো ?🤔😂 ",
      "আমাকে ডেকো না,আমি ব্যাস্ত আছি",
      "কি হলো , মিস্টেক করচ্ছিস নাকি🤣",
      "বলো কি বলবা, সবার সামনে বলবা নাকি?🤭🤏",
      "কালকে দেখা করিস তো একটু 😈",
      "হা বলো, শুনছি আমি 😏",
      "আর কত বার ডাকবি ,শুনছি তো",
      "হুম বলো কি বলবে😒",
      "বলো কি করতে পারি তোমার জন্য",
      "আমি তো অন্ধ কিছু দেখি না🐸 😎",
      "Bot না জানু,বল 😌",
      "বলো জানু 🌚",
      "তোর কি চোখে পড়ে না আমি ব্যাস্ত আছি😒",
      "হুম জান তোমার ওই খানে উম্মহ😑😘",
      "আহ শুনা আমার তোমার অলিতে গলিতে উম্মাহ 😇😘",
      "jang hanga korba😒😬",
      "হুম জান তোমার অইখানে উম্মমাহ😷😘",
      "আসসালামু আলাইকুম বলেন আপনার জন্য কি করতে পারি..!🥰",
    ];

    const triggers = ["bby", "Bby", "BOT", "bot", "বট", "Baby", "baby"];
    const isTriggered = triggers.some((trigger) => body.startsWith(trigger));

    if (isTriggered) {
      const randomResponse = responses[Math.floor(Math.random() * responses.length)];
      const message = `╭─────•◈•──────╮\n\n❄𝐃𝐞𝐚𝐫, ${name}\n💌: ${randomResponse}\n\n╰─────•◈•──────╯`;

      return api.sendMessage({ body: message }, threadID, messageID);
    }
  } catch (error) {
    console.error("Error in goibot event handler:", error);
  }
};

module.exports.run = function() {
  console.log("The 'goibot' module is running!");
};