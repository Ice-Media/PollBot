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

  if (!rMember.roles.has(gRole.id))
    return message.reply("They don't have that role.");
  await rMember.removeRole(gRole.id);

  message.channel.send(
    `<@${rMember.id}> You no longer have ${gRole.name} role.`
  );
};

module.exports.help = {
  name: "removerole"
};
