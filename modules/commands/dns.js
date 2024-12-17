module.exports.config = {
  name: "dns",
  version: "1.0.0",
  hasPermission: 0, // Corrected the spelling from "hasPermssion"
  credits: global.config.Codemaker,
  description: "Check dns",
  usePrefix: true, // Indicates the use of a prefix
  commandCategory: "group",
  cooldowns: 5, // Cooldown in seconds
  usages: "dns [domain]",
  dependencies: {
    "dns": ""
  },
  info: [
    {
      key: 'domain',
      prompt: 'Enter the domain name to lookup',
      type: 'Document',
      example: 'dns berver.tech'
    }
  ],
  envConfig: {
    // Setup env variables like APIKEY, etc.
  }
};

module.exports.run = function({ api, event, args, client, __GLOBAL }) {
  const dns = global.nodemodule['dns']; 

  const options = { 
    all: true
  };

  var out = (msg) => api.sendMessage(msg, event.threadID, event.messageID);
  var a = args.join();
  
  return dns.lookup(a, options, (err, addresses) => out(addresses));
};