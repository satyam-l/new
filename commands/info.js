const Discord = require('discord.js');

module.exports.run = async (client, message, args) => {   
  let embed = new Discord.RichEmbed()
    .setTitle("Information")
    .setColor(0xFF4500)
    .setDescription("PokeDex-2.0 is a bot aimed to help Pokecord players. It will tell you what Pokemon it is whenever Pokecord spawns one. As such, you no longer have to rack your brains or even search Google. Sometimes, you may just miss a rare Pokemon like this.")
    .addField("Developer", "<@702734427419181096>")
    .addField("How does it work?", "All the images from Pokecord are hashed into short strings, and stored in our database. When Pokecord spawns a Pokemon, PokeDex-2.0 will hash it, then compare with the database and retrieve the name of the Pokemon. not this feature wont be added in alex bot");
  
  message.channel.send(embed);
};

exports.help = {
  name: "info",
  category: "General",
  description: "Get some information about me.",
  usage: "info"
};