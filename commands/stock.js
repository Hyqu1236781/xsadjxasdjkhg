const Discord = require ("discord.js")

exports.run = async (client, message) => {
  let embed = new Discord.RichEmbed()
.setColor("#363940")
.setFooter('©️ CopyRight xaq™️')
.addField('__STOCK__','__**STOCK COMMANDS**__\n\n`.spotify`: 624.\n`.nitro`: 4320001.\n`.hulu`: 352.\n`.uplay`: 4609.\n`.minecraft`: 1418.\n`.epicgames`: 10540.\n`.valorant`: 660.\n`.steam`: 1279.\n`.nordvpn`: 1480.\n`.origin` 3826.\n\n **✩** Remember that you are using a free generator, this account may not work!');
message.channel.send(embed)
}
module.exports.help = {
  name: 'help'
}
