console.clear()

const Client = require("./Structures/Client.js")
const Command = require("./Structures/Command.js")
const config = require("./Data/config.json")
const client = new Client()
const fs = require("fs")


fs.readdirSync("./src/Commands")
    .filter(file => file.endsWith(".js"))
    .forEach(file => {
        /**
         * @type {Command}
         */
        const command = require(`./Commands/${file}`)
        console.log(`command ${command.name} loaded`)
        client.commands.set(command.name, command)

    })


client.on("ready", () => {
    console.log(`${client.user.tag} is online !`)
})

client.on("guildMemberAdd", member => {
    const role = member.guild.roles.cache.find(role => role.id === "745917099968561203")
    const channel = client.channels.cache.get("802477687620894720")
    channel.send(`Welome @${member.user.tag} to Light way`)
    member.roles.add(role)
    console.log(role.name)

})


client.on("channelCreate", channel => {
    const chnl = channel.name
    console.log(chnl)
    const textchnl = client.channels.cache.get("866186223320301608")
    console.log(textchnl.name)
    textchnl.send(`Channel \` ${chnl} \`  has been created `).catch(console.error)
})



client.on('messageCreate', async msg => {
    if (!msg.content.startsWith(config.prefix)) return;

    const args = msg.content.substring(config.prefix.length).split(/ +/);

    args[0] = args[0].toLowerCase()

    const command = client.commands.find(cmd => cmd.name == args[0])

    if (!command) return msg.reply(`${args[0]} is not a valid command !`)

    command.run(msg, args, client)

})




client.login(config.token);
