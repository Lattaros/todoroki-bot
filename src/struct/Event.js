class Event {
    constructor(eventName) {
        if(!eventName) throw new Error("I didn't find the event.")
        this.eventName = eventName;
    }

    register(client) {
        this.client = client

        client.on(this.eventName, (...args) => { this.run(...args ) });
    }
}

module.exports = Event
