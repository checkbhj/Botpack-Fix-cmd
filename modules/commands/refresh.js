module.exports.config = {
  name: "refresh",
  version: "0.0.1",
  hasPermission: 0,
  credits: global.config.Codemaker,
  description: "Reload all group information",
  usePrefix: true, // Enables prefix usage
  commandCategory: "System",
  cooldowns: 500, // Time in seconds to prevent spam
};

module.exports.run = async ({ event, api, Threads }) => {
    const threadInfo = await api.getThreadInfo(event.threadID);
  await Threads.setData(event.threadID, { name: threadInfo.name, threadInfo });
  global.data.threadInfo.set(parseInt(event.threadID), threadInfo);
    return api.sendMessage("Successfully refresh group information!", event.threadID, event.messageID);
}
