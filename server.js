const { Client, Intents } = require("discord.js");
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });
dotenv = require("dotenv-flow").config();

const config = {
  token: process.env.DISCORD_TOKEN,
  owner: process.env.OWNER_ID,
  prefix: process.env.PREFIX,
};

client.once("ready", () => {
  console.log(`Logged in as ${client.user.tag}`);
});

client.on("message", (msg) => {
  console.log("Working!");
});

client.login(config.token);
