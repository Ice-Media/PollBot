const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    // if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("Missing Permission: Manage Messages");

    let adembed = new Discord.RichEmbed()
    .setTitle("Admin Help")
    .setColor("#00ff7b")
    .addField("kick", "Use command and tag someone with a reason following. Must have Message Managing Permissions to use.")
    .addField("ban", "Use command and tag someone with a reason following. Must have Role Managing Permissions to use.")
    .addField("echo", "Outputs what you put after the command.")
    .addField("clear", "Put command and then a number after it. Will delete that many messages. Minimum 2.");

    return message.channel.send(adembed);

}

module.exports.help = {
    name: "admhelp"
}
