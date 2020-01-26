const Command = require('../../struct/Command');
const { RichEmbed } = require('discord.js');

class ServerListCommand extends Command {
    constructor() {
        super({
            name: 'serverlist',
            aliases: ['sl'],
            category: 'Info'
        })
    }

    async run({message, args}) {
        
        let botembed = new RichEmbed()
        .setColor("RANDOM")
        .addField("I am present on:", this.client.guilds.map(g => `${g.name} <@${g.owner.id}>\n`))
        
        message.channel.send(botembed);
    }
}

module.exports = ServerListCommand