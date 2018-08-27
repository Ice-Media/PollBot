const botconfig = require("./botconfig.json");
const versioncontrol = require("./versioncontrol.json")
const Discord = require("discord.js");
const fs = require("fs");
const bot = new Discord.Client({ disableEveryone: true });
bot.commands = new Discord.Collection();
let xp = require("./xp.json")
let purple = botconfig.purple;

fs.readdir("./Commands", (err, files) => {
  if (err) console.log(err);

  let jsfile = files.filter(f => f.split(".").pop() === "js");
  if (jsfile.length <= 0) {
    console.log("Couldn't find commands.");
    return;
  }

  jsfile.forEach((f, i) => {
    let props = require(`./Commands/${f}`);
    console.log(`${f} loaded.`);
    bot.commands.set(props.help.name, props);
  });
});

bot.on("ready", () => {
  console.log(`${bot.user.username} is online!`);
  bot.user.setActivity("Type ;;help");
});

bot.on("message", message => {
  if (message.author.bot) return;
  if (message.channel.type === "dm") return;

  //Level System START

  let xpAdd = Math.floor(Math.random() * 7) + 8;
  console.log(xpAdd);

  if(!xp[message.author.id]){
    xp[message.author.id] = {
      xp: 0,
      level: 1
    };
  }

  let curxp = xp[message.author.id].xp;
  let curlevel = xp[message.author.id].level;
  let nxtLevel = xp[message.author.id].level * 300;
  xp[message.author.id].xp = curxp + xpAdd;
  if(nxtLevel <= xp[message.author.id].xp){
    xp[message.author.id].level = curlevel + 1;
    let lvlup = new Discord.RichEmbed()
    .setTitle("Level Up!")
    .setColor(purple)
    .addField("New Level", curlevel + 1);

    message.channel.send(lvlup).then(msg => {msg.delete(5000)});
  }
  fs.writeFile("./xp.json", JSON.stringify(xp), (err) =>{
    if(err) console.log(err)
  });

  //Level System END

  let prefix = botconfig.prefix;
  let messageArray = message.content.split(" ");
  let cmd = messageArray[0];
  let args = messageArray.slice(1);

  let commandfile = bot.commands.get(cmd.slice(prefix.length));
  if (commandfile) commandfile.run(bot, message, args);
});

bot.login(botconfig.token).catch(console.error);
