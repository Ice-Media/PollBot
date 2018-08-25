const Discord = require("Discord.js");

module.exports.run = async (bot, message, args) => {
  let rMember =
    message.guild.member(message.mentions.users.first()) ||
    message.guild.members.get(args[0]);
  if (!rMember) return message.reply("Could not find User.");
  let role = message.content.split(" ").splice(2).join(" ");
  if (!role) return message.reply("specify a Role.");
  let gRole = message.guild.roles.find(`name`, role);
  if (!gRole) return message.reply("Couldn't find that Role.");

  if (rMember.roles.has(gRole.id))
    return message.reply("They already have that role.");
  await rMember.addRole(gRole.id);

  message.channel.send(`<@${rMember.id}> You now have the ${gRole.name} role.`);
};

module.exports.help = {
  name: "addrole"
};