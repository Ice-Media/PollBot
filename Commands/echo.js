const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  if (!message.member.hasPermission("MANAGE_MESSAGES"))
    return message.reply("Missing Permission: Manage Messages");
  let botmessage = args.slice(1).join(" ");
  message.delete().catch();
  bot.channels
    .get(message.mentions.channels.first().id)
    .send(botmessage)
    .catch(console.error);
};

module.exports.help = {
  name: "echo"
};
