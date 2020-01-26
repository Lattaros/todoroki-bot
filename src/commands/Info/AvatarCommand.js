const Command = require('../../struct/Command')
const { RichEmbed } = require('discord.js')
 
class Avatar extends Command {
    constructor() {
        super({
            name: 'avatar',
            aliases: ['avt'],
            category: 'Info'
        })
    }

    run({message, args}) {
        const mention = message.mentions.members.first()
        let member = mention? mention: message.guild.members.get(args[0])
        if (!member) Member = message.member
        const embed = new Discord.RichEmbed()
            .setColor("RANDOM")
            .setImage(member.user.displayAvatarURL)  
        if (!args[0]) return message.channel.send(embed.setTitle(message.author.tag))
    
        message.channel.send(embed.setTitle(Member.user.tag))
    }
    
}
module.exports = Avatar
