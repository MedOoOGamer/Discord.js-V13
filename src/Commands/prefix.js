/** @format */
const Command = require("../Structures/Command.js")
const config = require("../Data/config.json")

module.exports = new Command({
    name: "prefix",
    description: "Changes the bot prefix",

    async run(message, args, client) {

        config.prefix = args[1]

        
    }
})