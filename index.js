const { Client, SQLiteProvider } = require("disbull.js");

const sqlite = require("sqlite");
const path = require("path");
const oneLine = require("common-tags").oneLine;

const client = new Client({
  owner: ["325414558623858698"],
  commandPrefix: "s*",
  token: "Njc2NjY2Njc2MjUwNDExMDA4"
});

sqlite.open(path.join(__dirname, "/Data/settings.sqlite3")).then(db => {
  client.setProvider(new SQLiteProvider(db));
});

client.registry.registerCommandsIn(path.join(__dirname, "commands"));
client.registry.registerEventsIn(path.join(__dirname, "events"));
client.registry.registerLocalesIn(path.join(__dirname, "locales"));

client
  .on("commandPrefixChange", (guild, prefix) => {
    console.log(oneLine`
		Prefix ${prefix === "" ? "removed" : `changed to ${prefix || "the default"}`}
		${guild ? `in guild ${guild.name} (${guild.id})` : "globally"}.
	`);
  })
  .on("localeChange", (guild, locale) => {
    console.log(oneLine`
			Locale ${locale ? `changed to ${locale}` : `changed to the default.`}
			${guild ? `in guild ${guild.name} (${guild.id})` : "globally"}
		`);
  });

client.run();

