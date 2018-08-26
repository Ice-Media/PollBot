const Discord = require("discord.js");

module.exports.run = async (bot, message, args) =>{

let sinfo = new Discord.RichEmbed()
.setTitle("Current System Info")
.setColor("#00bbff")
.setThumbnail("https://i.imgur.com/Klx0sbN.png")
.addField("OS Version", "Windows Server 2016 Build 16299.579")
.addField("CPU", "Intel Xeon Platinum Scalable 8170 @2.1GHz")
.addField("RAM", "64GB DDR4 2133MHz")
.addField("PCIe Slot #1", "nVidia GeForce GTX Titan Xp")
.addField("PCIe Slot #2", "nVidia GeForce GTX Titan Xp")
.addField("PCIe Slot #3", "nVidia GeForce GTX Titan Xp")
.addField("PCIe Slot #5", "Intel I350-AM2 Ethernet Controller");

return message.channel.send(sinfo);

}

module.exports.help = {
    name: "sysinfo"
}
