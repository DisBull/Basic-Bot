const { Command } = require("disbull.js");

const { stripIndents, oneLine } = require('common-tags');

class Prefix extends Command {
  constructor(client) {
    super(client, {
      name: "prefix",
      description: language => language.get("RELOAD_DESCRIPTION"),
      usage: language => language.get("RELOAD_USAGE"),
      examples: language => language.get("RELOAD_EXAMPLES"),
      dirname: __dirname,
      enabled: true,
      guildOnly: false,
      aliases: [],
      memberPermissions: ["ADMINISTRATOR"],
      botPermissions: [],
      nsfw: false,
      ownerOnly: true,
      cooldown: 3000
    });
  }

  async run(msg, args, data) {
    let p = msg.content.split(" ").slice(1).join(" ");
    
     // Just output the prefix
        if(!p) {
            const prefix = msg.guild ? msg.guild.commandPrefix : this.client.commandPrefix;
            return msg.reply(stripIndents`
				${prefix ? msg.language.get("PREFIX_NOARGS")[0] : msg.language.get("PREFIX_NOARGS")[1]}.
			`);
        }
    
        /* Check the user's permission before changing anything
        if(msg.guild) {
            if(!msg.member.hasPermission('ADMINISTRATOR') && !this.client.isOwner(msg.author)) {
                return msg.reply('Only administrators may change the command prefix.');
            }
        } else if(!this.client.isOwner(msg.author)) {
            return msg.reply('Only the bot owner(s) may change the global command prefix.');
        }
        */
        // Save the prefix
        const lowercase = p.toLowerCase();
        const prefix = lowercase === 'none' ? '' : p;
        let response;
        var d 
        if(lowercase === 'default') {
            if(msg.guild) msg.guild.commandPrefix = null; else this.client.commandPrefix = null;
            const current = this.client.commandPrefix ? `\`${this.client.commandPrefix}\`` : 'no prefix';
            response = `Reset the command prefix to the default (currently ${current}).`;
          d = current
        } else {
            if(msg.guild) msg.guild.commandPrefix = prefix; else this.client.commandPrefix = prefix;
            response = prefix ? msg.language.get("PREFIX_SET", prefix, msg.guild) : msg.language.get("PREFIX_NONE");
            d = prefix
        }
        await msg.reply(`${response}\n > ${msg.language.get("PREFIX_RUN", prefix)}`);
        return null;
  }
}

module.exports = Prefix;
