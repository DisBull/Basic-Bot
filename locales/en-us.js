const {
    Locale
} = require('disbull.js')
let lang = "english";

const e = {
    error: "❌",
    success: "✅"
}

class enUS extends Locale {
    constructor(client) {
        super(client, 'en-us');

        this.language = {
            PREFIX_INFO: (prefix) => `the prefix of this server is \`${prefix}\``,
            /* DEFAULT MESSAGES */
            NO_DESCRIPTION_PROVIDED: "No description provided",
            NO_USAGE_PROVIDED: "No usage provided",
            NO_EXAMPLE_PROVIDED: "No example provided",

            // ERROR MESSAGES
            ERR_COMMAND_DISABLED: `${e.error} | This command is currently disabled!`,
            ERR_OWNER_ONLY: (owner) => `${e.error} | Only ${owner} can do these commands!`,
            ERR_INVALID_CHANNEL: `${e.error} | Please mention a valid channel!`,
            ERR_INVALID_ROLE: `${e.error} | Please mention a valid role!`,
            ERR_INVALID_MEMBER: `${e.error} | Please mention a valid member!`,
            ERR_INVALID_NUMBER: (nan) => `${e.error} | \`${nan}\` is not a valid number!`,
            ERR_INVALID_NUMBER_MM: (min, max) => `${e.error} Please indicate a valid number between ${min} and ${max}!`,
            ERR_INVALID_TIME: `${e.error} | You must enter a valid time! Valid units: \`s\`, \`m\`, \`h\`, \`d\`, \`w\`, \`y\``,
            ERR_INVALID_ID: `${e.error} | Please enter a valid ID!`,

            ERR_MISSING_BOT_PERMS: (perms) => `${e.error} | I need the following permissions to perform this command: \`${perms}\``,
            ERR_MISSING_MEMBER_PERMS: (perm) => `${e.error} | You do not have the necessary permissions to perform this command (\`${perm}\`)`,
            ERR_NOT_NSFW: `${e.error} | You must go to in a channel that allows the NSFW to type this command!`,
            ERR_GUILDONLY: `${e.error} | This command is only available on a server!`,
            ERR_UNAUTHORIZED_CHANNEL: (channel) => `${e.error} | Commands are forbidden in ${channel} !`,
            ERR_BAD_PARAMETERS: (cmd, prefix) => `${e.error} | Please check the commands parameters. Look at the examples by typing \`${prefix}help ${cmd}\` !`,
            ERR_ROLE_NOT_FOUND: (role) => `${e.error} | No role found with \`${role}\` !`,
            ERR_CHANNEL_NOT_FOUND: (channel) => `${e.error} | No channel found with \`${channel}\``,
            ERR_YES_NO: `${e.error} | You must answer "yes" or "no"!`,
            ERR_EVERYONE: `${e.error} | You are not allowed to mention everyone or here in the commands.`,
            ERR_BOT_USER: `${e.error} | This user is a bot!`,
            ERR_GAME_ALREADY_LAUNCHED: `${e.error} | A game is already running on this server!`,
            ERR_A_GAME_ALREADY_LAUNCHED: `${e.error} | Because of the lags and bugs due to the findwords and the number, it is impossible to run two games at the same time, even if they are on two different servers. There is a game currently running on another server, so please wait a few minutes and then try again. We are sorry, but people were abusing this command by spamming it on lots of servers.`,
            ERR_OCCURENCED: `${e.error} | An error has occurred, please try again in a few minutes.`,
            ERR_CMD_COOLDOWN: (seconds) => `${e.error} | You must wait **${seconds}** second(s) to be able to run this command again!`,
            ERR_SANCTION_YOURSELF: `${e.error} | You can't sanction yourself!`,

            /* PING COMMAND */

            // Utils
            PING_DESCRIPTION: "Displays bot latency",
            PING_USAGE: "ping",
            PING_EXAMPLES: "ping",
            // Content
            PING: (ms) => `${e.success} | Pong! My latency is \`${ms}\` ms !`,

            // Utils
            RELOAD_DESCRIPTION: "Reload a bot command!",
            RELOAD_USAGE: "reload [name-of-the-command]",
            RELOAD_EXAMPLES: "reload ping",
            // Errors
            RELOAD_ERR_CMD: `${e.error} | Please enter the name of the command you want to reload!`,
            RELOAD_ERR_NOT_FOUND: (cmd) => `${e.error} | No command found for \`${cmd}\` !`,
            // Content
            RELOAD_SUCCESS: (cmd) => `${e.success} | The command ${cmd} has been reloaded!`,
          
            PREFIX_NOARGS: (prefix, guild) => [`The current prefix on the server **${guild.name}** is \`${prefix}\``, 'There is no command prefix.'],
            PREFIX_NONE: "Removed the command prefix entirely.",
            PREFIX_SET: (prefix, guild) => `The prefix on the server **${guild.name}** has been updated to **\`${prefix}\`** if you want to change the prefix use again \`${prefix}sprefix <Prefix>\``,
            PREFIX_RUN: prefix => `To run commands, use \`${prefix}command\` or \`@${this.client.user.tag} command\`.`
        }
    }
}

module.exports = enUS