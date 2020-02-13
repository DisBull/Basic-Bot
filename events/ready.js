const Discord = require("discord.js");
const { version } = require("disbull.js");

module.exports = class {

    constructor(client) {
        this.client = client;
    }

    async run() {
      
      this.client.logger.info(`Loading a total of ${this.client.commands.size} command(s).`, { tag: "BOT" });
      this.client.logger.log(`${this.client.user.tag}, ready to serve ${this.client.users.cache.size} users in ${this.client.guilds.cache.size} servers.`, { tag: "BOT" } );

      let toDisplay = "{USER} on {serversCount} servers".replace("{serversCount}", this.client.guilds.cache.size).replace("{USER}", this.client.user.tag) + " | v" + version;
      
      this.client.user.setPresence({
          status: "dnd",
          activity: {
            name: toDisplay,
            type: 3,
            url: "https://www.twitch.tv/"
          }
        })
    }
}