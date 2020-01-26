const Command = require('../../struct/Command');
const { RichEmbed } = require('discord.js');

class DeleteCommand extends Command {
    constructor() {
        super({
            name: 'delete',
            aliases: ['purge'],
            category: 'Mod'
        })
    }

    async run({message, args}) {
        
    	const msgDel = args[0];
		const numberMessages = parseInt(msgDel);
		message.channel.fetchMessages({ limit: numberMessages }).then(messages => message.channel.bulkDelete(messages));
		await message.channel.send(new RichEmbed() .setDescription(`${message.member} I deleted ${msgDel} message's.`) .setColor("RANDOM")) 
    }
}

module.exports = DeleteCommand
