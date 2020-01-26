const Event = require('../struct/Event')

class MessageEvent extends Event {
    constructor() {
        super("message");
    }

    run(message) {
        if (message.author.bot) return;
        this.client.commands.forEach(command => {
            if (command.start(message)) return;
        })
    }
}

module.exports = MessageEvent
