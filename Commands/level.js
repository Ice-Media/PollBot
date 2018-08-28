const Discord = require("discord.js");
const botconfig = require("../botconfig")
let purple = botconfig.purple;
let xp = require("../xp.json");

module.exports.run = async (bot, message, args) => {

  if(!xp[message.author.id]){
    xp[message.author.id]= {
      xp: 0,
      level: 1
  };
}
  let curxp = xp[message.author.id].xp;
  let curlevel = xp[message.author.id].level;
  let nxtLvlXp = curlevel * 300;
  let difference = nxtLvlXp - curxp

  let lvlEmbed = new Discord.RichEmbed()
  .setAuthor(message.author.username)
  .setColor(purple)
  .addField("Level", curlevel, true)
  .addField("XP", curxp, true)
  .setFooter(`${difference} XP till level up`, message.author.displayAvatarURL)

  message.channel.send(lvlEmbed);

}

module.exports.help = {
  name: "level"
}
