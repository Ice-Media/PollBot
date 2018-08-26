const Discord = require("discord.js");
const versioncontrol = require("../versioncontrol.json")

module.exports.run = async (bot, message, args) =>{

    let bicon = bot.user.displayAvatarURL;
    let botembed = new Discord.RichEmbed()
    .setTitle("Bot Information")
    .setColor("#0087ff")
    .setThumbnail(bicon)
    .addField("Bot Name", bot.user.username)
    .addField("Version", versioncontrol.version)
    .addField("Creator", "Ice, Kaveenieweenie, and DocStrix")
    .addField("Need Help?", "help");

    return message.channel.send(botembed);

}

module.exports.help = {
    name: "botinfo"
}
