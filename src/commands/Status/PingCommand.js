const Command = require('../../struct/Command');
const { RichEmbed } = require('discord.js')

class PingCommand extends Command {
    constructor() {
        super({
            name: 'ping',
            aliases: ['p']
        }) 
    }

  async run({message}) {
    let date = Date.now();
    let heartbeat = (date - message.createdTimestamp);

    const m = await message.channel.send("Calculating...");
    let latency = Math.round(m.createdTimestamp - message.createdTimestamp);

    let api_latency = Math.round(this.client.ping);

    let msg = ":ping_pong: Pong!";
    msg += "\nLatency » `" + latency + "ms`";
    msg += "\nHeartbeat » `" + heartbeat + "ms`";
    msg += "\nAPI Latency » `" + api_latency + "ms`";
    let e = new RichEmbed()
    .setDescription(msg)
    .setColor("RANDOM");

    m.edit(e);
    }
}

module.exports = PingCommand
