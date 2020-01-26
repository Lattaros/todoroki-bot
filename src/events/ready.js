const Event = require('../struct/Event');
const chalk = require('chalk');
const { PlayerManager } = require('discord.js-lavalink');

class ReadyEvent extends Event {
    constructor() {
        super("ready");
    }

    run() {

        console.log(chalk.greenBright('[INITIATED]'));
    }
}

module.exports = ReadyEvent;
