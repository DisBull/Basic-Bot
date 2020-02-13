const { Command } = require("disbull.js");

const { escapeMarkdown } = require('discord.js');
const Discord = require('discord.js');
const { oneLine } = require('common-tags');
const util = require('util');

class Eval extends Command {
    constructor(client) {
        super(client, {
            name: "eval",
            description: language => language.get("EVAL_DESCRIPTION"),
            usage: language => language.get("EVAL_USAGE"),
            examples: language => language.get("EVAL_EXAMPLES"),
            dirname: __dirname,
            enabled: true,
            guildOnly: false,
            aliases: [],
            memberPermissions: [],
            botPermissions: ["SEND_MESSAGES", "EMBED_LINKS"],
            nsfw: false,
            ownerOnly: true,
            cooldown: 3000
        });
        this.lastResult = null;
        this.client = client
    }

    async run(message, args) {
        /* eslint-disable no-unused-vars */
        const msg = message;
        const channel = message.channel;
        const guild = message.guild;
        const client = message.client;
        const lastResult = this.lastResult;
        /* eslint-enable no-unused-vars */
        var code = message.content.split(" ").slice(1).join(" ");

        // Normal Eval
        var evalTime;
        var hrEnd
        try {
            /* Start Eval Block */
            var hrStart = await process.hrtime(this.hrStart)
            var result = await eval(code) // eslint-disable-line no-eval
            hrEnd = await process.hrtime(hrStart)
            evalTime = hrEnd
            /* End Eval Block */

            var type
            if (typeof result === 'object') {
                type = `object - ${result.constructor.name}`
            } else if (typeof result === 'function') {
                type = oneLine `
          function
          ${result.name || result.length ? '-' : ''}
          ${result.name ? `Name: ${result.name}` : ''}
          ${result.name && result.length ? `|` : ''}
          ${result.length ? `#Args: ${result.length}` : ''}
        `
                result = result.toString()
            } else {
                type = typeof result
            }
            if (typeof(result) !== 'string') {
                result = util.inspect(result, {
                    showHidden: true,
                    compact: false,
                    depth: 0
                })
            }
          
            result.replace(this.client.token, '[TOKEN]')
          
            this.lastResult = result.replace(this.client.token, '[TOKEN]')
            // Evaluation Success 1024
            if (result.length > 1024 || code.length > 1024) {
                this.client.lib.hastebin(`${result}`, "js").then(r => {
                    channel.send({
                        embed: {
                            author: {
                                name: this.client.user.tag,
                                icon_url: this.client.user.displayAvatarURL()
                            },
                            footer: {
                                text: message.author.tag,
                                icon_url: message.author.displayAvatarURL()
                            },
                            timestamp: new Date(),
                            description: `*Evaluated in ${evalTime[0] > 0 ? `${evalTime[0]}s ` : ''}${evalTime[1] / 1000000}ms.*`,
                            fields: [{
                                    'name': 'Evaluated',
                                    'value': '```js\n' + escapeMarkdown(code, true) + '\n```',
                                    'inline': false
                                },
                                {
                                    'name': 'Result',
                                    'value': `[\`${r}\`](${r})`,
                                    'inline': false
                                },
                                {
                                    'name': 'Type',
                                    'value': '```js\n' + escapeMarkdown(type, true) + '\n```',
                                    'inline': false
                                }
                            ],
                            color: 0x00AA00
                        }
                    })
                })
            } else {
                // Evaluation Success
                channel.send({
                    embed: {
                        author: {
                            name: this.client.user.tag,
                            icon_url: this.client.user.displayAvatarURL()
                        },
                        footer: {
                            text: message.author.tag,
                            icon_url: message.author.displayAvatarURL()
                        },
                        timestamp: new Date(),
                        description: `*Evaluated in ${evalTime[0] > 0 ? `${evalTime[0]}s ` : ''}${evalTime[1] / 1000000}ms.*`,
                        fields: [{
                                'name': 'Evaluated',
                                'value': '```js\n' + escapeMarkdown(code, true) + '\n```',
                                'inline': false
                            },
                            {
                                'name': 'Result',
                                'value': ('```js\n' + escapeMarkdown(result.toString(), true) + '\n```').replace(this.client.token, '[TOKEN]'),
                                'inline': false
                            },
                            {
                                'name': 'Type',
                                'value': '```js\n' + escapeMarkdown(type, true) + '\n```',
                                'inline': false
                            }
                        ],
                        color: 0x00AA00
                    }
                }).catch(error => {
                    message.reply(`there was an error when sending a message:\n\`${escapeMarkdown(error.toString(), true)}\``)
                })
            }
        } catch (error) {
            hrEnd = await process.hrtime(hrStart)
            evalTime = hrEnd
            // Evaluation Error
            this.client.lib.hastebin(error.stack, "js").then(r => {
                channel.send({
                    embed: {
                        author: {
                            name: this.client.user.tag,
                            icon_url: this.client.user.displayAvatarURL()
                        },
                        footer: {
                            text: message.author.tag,
                            icon_url: message.author.displayAvatarURL()
                        },
                        timestamp: new Date(),
                        description: `*Evaluated in ${evalTime[0] > 0 ? `${evalTime[0]}s ` : ''}${evalTime[1] / 1000000}ms.*`,
                        fields: [{
                                'name': 'Evaluated',
                                'value': '```js\n' + escapeMarkdown(code, true) + '\n```',
                                'inline': false
                            },
                            {
                                'name': 'Exception',
                                'value': `[\`\`\`js\n${escapeMarkdown(`${error.name}: ${error.message}`, true)}\n\`\`\`](${r})`,
                                'inline': false
                            }
                        ],
                        color: 0xAA0000
                    }
                }).catch(error => {
                    message.reply(`there was an error when sending a message:\n\`${escapeMarkdown(error.toString(), true)}\``)
                })
            })
        }
    }
}

module.exports = Eval;