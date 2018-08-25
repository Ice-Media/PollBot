const Discord = require("discord.js");

module.exports.run = async (bot, message, args) =>{

    var nick = message.member.nickname;
    var roleColor = message.member.displayHexColor;

    if(roleColor == "#000000") roleColor = "#99aab5";

    var embed = new Discord.RichEmbed()
      .setAuthor("User Info", message.author.displayAvatarURL)
      .setColor(roleColor)
      .setThumbnail(message.author.displayAvatarURL)
      .setFooter("This action was performed automatically")
      .setTimestamp()
      .addField("Username", message.author.username, false);
    if (!(nick == null || nick == message.author.username)) {
      embed.addField("Nickname", nick, false);
    }
    if (message.member.presence.activity != null) {
      embed.addField("Game", message.member.presence.activity.name, false);
    }
    embed.addField("Status", message.member.presence.status, false);
    embed.addField("Joined Date", message.member.joinedAt, false);
    embed.addField("Account Creation Date", message.author.createdAt, false);
    embed.addField("Highest Role", message.member.highestRole, false);

    return message.channel.send(embed);

}

module.exports.help = {
    name: "userinfo"
}