const {
    Locale
} = require('disbull.js')
let lang = "spanish";

const e = {
    error: "❌",
    success: "✅"
}

class esMX extends Locale {
    constructor(client) {
        super(client, 'es-mx')

        this.language = {
            PREFIX_INFO: (prefix) => `el prefijo de este servidor es \`${prefix}\``,
            /* DEFAULT MESSAGES */
            NO_DESCRIPTION_PROVIDED: "No se ha proporcionado ninguna descripción.",
            NO_USAGE_PROVIDE: "",
            D: "No se proporciono un uso",
            NO_EXAMPLE_PROVIDED: "No se proporcionó ningún ejemplo.",

            // ERROR MESSAGES

            ERR_COMMAND_DISABLED: `${e.error} | ¡Este comando está actualmente desactivado!`,
            ERR_OWNER_ONLY: (owner) => `${e.error} | ¡Solo ${owner} puede usar este comando!`,
            ERR_INVALID_CHANNEL: `${e.error} | ¡Por favor menciona un canal válido!`,
            ERR_INVALID_ROLE: `${e.error} | ¡Por favor mencione un rol válido!`,
            ERR_INVALID_MEMBER: `${e.error} | ¡Por favor menciona un rol miembro válido!`,
            ERR_INVALID_NUMBER: (nan) => `${e.error} | \`${nan}\` no es un número válido!`,
            ERR_INVALID_NUMBER_MM: (min, max) => `${e.error} ¡Indique un número válido entre ${min} y ${max}!`,
            ERR_INVALID_TIME: `${e.error} | ¡Debes ingresar una hora válida!\nUnidades válidas: \`s\`, \`m\`, \`h\`, \`d\`, \`w\`, \`y\``,
            ERR_INVALID_ID: `${e.error} | Por favor, introduzca una ID válida!`,

            ERR_MISSING_BOT_PERMS: (perms) => `${e.error} | Necesito los siguientes permisos para realizar este comando: \`${perms}\``,
            ERR_MISSING_MEMBER_PERMS: (perm) => `${e.error} | No tiene los permisos necesarios para ejecutar este comando (\`${perm}\`)`,
            ERR_NOT_NSFW: `${e.error} | ¡Debes ir a un canal que permita contenido NSFW!`,
            ERR_GUILDONLY: `${e.error} | ¡Este comando solo está disponible en un servidor!`,
            ERR_UNAUTHORIZED_CHANNEL: (channel) => `${e.error} | ¡Los comandos están prohibidos en ${channel}!`,
            ERR_BAD_PARAMETERS: (cmd, prefix) => `$ {e.error} | Por favor verifique los parámetros de los comandos. ¡Mire los ejemplos escribiendo \ `,

            ERR_ROLE_NOT_FOUND: (role) => `${e.error} | ¡No se encontró ningún rol con \`$ {role}\`!`,
            ERR_CHANNEL_NOT_FOUND: (channel) => `$ {e.error} | No se ha encontrado ningún canal con \`$ {channel}\``,
            ERR_YES_NO: `${e.error} | ¡Debe responder "sí" o "no"!`,
            ERR_EVERYONE: `${e.error} | No está permitido mencionar a todos con los comandos.`,
            ERR_BOT_USER: `${e.error} | Este usuario es un bot!`,
            ERR_GAME_ALREADY_LAUNCHED: `${e.error} | ¡Ya se está ejecutando un juego en este servidor!`,
            ERR_OCCURENCED: `${e.error} | Se ha producido un error. Vuelve a intentarlo en unos minutos.`,
            ERR_CMD_COOLDOWN: (seconds) => `${e.error} | ¡Debe esperar **${seconds}** segundo(s) para poder ejecutar este comando nuevamente!`,
            ERR_SANCTION_YOURSELF: `${e.error} | ¡No puedes sancionarte a ti mismo!`,

            /* PING COMMAND */

            // Utils
            PING_DESCRIPTION: "Displays bot latency",
            PING_USAGE: "ping",
            PING_EXAMPLES: "ping",
            // Content
            PING: (ms) => `${e.success} | ¡Pong! ¡Mi latencia es \`${ms}\` ms!`,

            // Utils
            RELOAD_DESCRIPTION: "Reload a bot command!",
            RELOAD_USAGE: "reload [name-of-the-command]",
            RELOAD_EXAMPLES: "reload ping",
            // Errors
            RELOAD_ERR_CMD: `${e.error} | Please enter the name of the command you want to reload!`,
            RELOAD_ERR_NOT_FOUND: (cmd) => `${e.error} | No command found for \`${cmd}\` !`,
            // Content
            RELOAD_SUCCESS: (cmd) => `${e.success} | The command ${cmd} has been reloaded!`,
          
            PREFIX_NOARGS: (prefix,guild) => [`El prefix actual en el servidor **${guild.name}** es **\`${prefix}\`**.`, 'No hay prefijo de comando.'],
            PREFIX_NONE: "Se eliminó el prefijo del comando por completo.",
            PREFIX_SET: (prefix, guild) => `El prefijo en el servidor **${guild.name}** a sido actualizado a \`${prefix}\` si deseas cambiar el prefix usa de nuevo  \`${prefix}prefix <Prefijo>\` `,
            PREFIX_RUN: (prefix) => `Para ejecutar comandos, use \`${prefix}command \` o \`@${this.client.user.tag} command\`.`
        }
    }

}
module.exports = esMX