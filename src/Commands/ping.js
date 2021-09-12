/** @format */
const Command = require("../Structures/Command.js")

module.exports = new Command({
    name: "ping",
    description: "Show the ping of the bot ",

    async run(message, args, client) {

        const msg = await message.reply(`Pinging %`)

        msg.edit(`Ping = \` ${client.ws.ping} ms \` \nMessage ping = \` ${msg.createdTimestamp - message.createdTimestamp} ms \``)

    }
})