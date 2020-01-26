const { Client } = require('discord.js')
const Loader = require('./Loader')

class Bot extends Client {
    constructor(options = {}) {
        super(options);

        this.commands = [];
    }


    async login(token) {
        const loader = await new Loader(this)
        loader.load('./src/events')
        loader.load('./src/commands')
        super.login(token);
    }
}

module.exports = Bot
