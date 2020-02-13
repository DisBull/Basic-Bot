const { Command } = require("disbull.js");

const Discord = require("discord.js");

class Ping extends Command {

    constructor (client) {
        super(client, {
            name: "ping",
            description: (language) => language.get("PING_DESCRIPTION"),
            usage: (language) => language.get("PING_USAGE"),
            examples: (language) => language.get("PING_EXAMPLES"),
            dirname: __dirname,
            enabled: true,
            guildOnly: false,
            aliases: [ "pong", "latency" ],
            memberPermissions: ["ADMINISTRATOR"],
            botPermissions: [ "SEND_MESSAGES" ],
            nsfw: false,
            ownerOnly: false,
            cooldown: 1000
        });
    }

    async run (msg, args) {
      let ping = Math.floor(msg.client.ws.ping);
      
      msg.channel.send(msg.language.get("PING", 0.0000)).then((m) => {
        m.edit(msg.language.get("PING", ping));
      });
    }

}

module.exports = Ping;