const dotenv = require("dotenv");
dotenv.config();
const { Client, Intents } = require("discord.js");
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

client.once("ready", () => {
  console.log(`Logged in as ${client.user.tag}`);
});

client.on("message", (msg) => {
  console.log("Working!");
});

client.login(process.env.DISCORD_TOKEN);
