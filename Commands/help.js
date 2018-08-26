const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

let helpembed = new Discord.RichEmbed()
.setTitle("Help")
.setColor("#00ff7b")
.addField("botinfo", "Displays information about this bot.")
.addField("serverinfo", "Displays information about the server.")
.addField("For Administrative Commands:", "Use admhelp")
.addField("colors", "Displays a List of colors you can use for your name!")
.addField("addrole", "Give mentioned person a role from the list of colors.")
.addField("removerole", "Does the opposite of !addrole.")
.addField("userinfo", "Gives information about the user and their roles.")

return message.channel.send(helpembed);

}

module.exports.help = {
    name: "help"
}
