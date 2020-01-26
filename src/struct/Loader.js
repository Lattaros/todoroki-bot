const { walk } = require('walk')
const { resolve, sep } = require('path')
const chalk = require('chalk')

class Loader {
    constructor(client) {
        this.client = client
    }

    load(path) {
        if (!path) return;

        walk(path).on("file" , (root, stats, next) => {
            if(!stats.name.endsWith(".js")) return;

            const Loading = new (require(resolve(root) + sep + stats.name))
            Loading.register(this.client);

            console.log(chalk.greenBright(`[Loaded] ${stats.name}`));

            next();
        })
    }
}
module.exports = Loader
