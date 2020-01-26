const Command = require('../../struct/Command')
const { RichEmbed } = require('discord.js')

class EvalCommand extends Command {
    constructor() {
        super({
            name: 'eval',
            aliases: ['e'],
            category: 'Owner'
        })
    } 

    run({message, args}) {
        if (message.author.id !== 'id') return;
        if (message.content.includes("token")) return message.reply("are you stupid, or what?");
        try {
            const input = args.join(" ");
            let output = eval(input);
    
            if (typeof output !== 'string')
            output = require('util').inspect(output, { depth: 0 });
            const embed = new RichEmbed()
                .setAuthor('Eval')
                .setColor("BLACK")
                .addField('Input', `\`\`\`js\n${input}\n\`\`\``)
                .addField('Output',  `\`\`\`js\n${output}\n\`\`\``)
                .setFooter(message.member, this.client.user.displayAvatarURL)
                .setTimestamp();   
            message.channel.send(embed)
        } catch(e) {
            message.channel.send(e);
        }
    }
} 
module.exports = EvalCommand
