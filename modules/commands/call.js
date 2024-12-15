module.exports.config = {
  name: "call",
  version: "1.0.0",
  hasPermission: 0,
  credits: global.config.Codemaker, // Retains dynamic global credit assignment
  description: "Add my owner into this group.",
  usePrefix: true, // Retains dynamic prefix toggle
  commandCategory: "admin",
  usages: "..",
  cooldowns: 5
};

module.exports.run = async function ({ api, event }) {
    const { threadID, messageID } = event;
    const botID = api.getCurrentUserID();
    const out = msg => api.sendMessage(msg, threadID, messageID);
    const targetUserID = "100071575183469"; // The user you want to add to the group

    var { participantIDs, approvalMode, adminIDs } = await api.getThreadInfo(threadID);
    var participantIDs = participantIDs.map(e => parseInt(e));

    if (participantIDs.includes(parseInt(targetUserID))) {
        return out("𝑴𝒚 𝑩𝒐𝒔𝒔 𝒂𝒍𝒓𝒆𝒂𝒅𝒚 𝒊𝒏 𝒕𝒉𝒊𝒔 𝒈𝒓𝒐𝒖𝒑✅\n⚡𝑱𝒖𝒔𝒕 𝒎𝒆𝒏𝒕𝒊𝒐𝒏 @𝐒𝐚𝐢𝐦𝐮𝐦 𝐒𝐚𝐛𝐢𝐤 ");
    } else {
        var admins = adminIDs.map(e => parseInt(e.id));
        try {
            await api.addUserToGroup(parseInt(targetUserID), threadID);
        } catch {
            return out("𝑭𝒂𝒊𝒍𝒆𝒅 𝒕𝒐 𝒂𝒅𝒅 𝒕𝒉𝒆 𝒖𝒔𝒆𝒓 𝒕𝒐 𝒕𝒉𝒆 𝒈𝒓𝒐𝒖𝒑 ❌");
        }

        if (approvalMode === true && !admins.includes(botID)) {
            return out("𝑴𝒚 𝑩𝒐𝒔𝒔 𝑺𝒂𝒃𝒊𝒌 𝒉𝒂𝒔 𝒃𝒆𝒆𝒏 𝒂𝒅𝒅𝒆𝒅 𝒕𝒐 𝒕𝒉𝒆 𝒂𝒑𝒑𝒓𝒐𝒗𝒆𝒅 𝒍𝒊𝒔𝒕✅");
        } else {
            return out("𝑺𝒖𝒄𝒄𝒆𝒔𝒔𝒇𝒖𝒍𝒍𝒚 𝒂𝒅𝒅𝒆𝒅 𝑴𝒚 𝑩𝒐𝒔𝒔 𝑺𝒂𝒃𝒊𝒌 𝒕𝒐 𝒚𝒐𝒖𝒓 𝑮𝒓𝒐𝒖𝒑✅");
        }
    }
}
