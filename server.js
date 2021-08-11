const { Client, Intents } = require("discord.js");
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });
require("dotenv-flow").config();

const config = {
  token: process.env.DISCORD_TOKEN,
  owner: process.env.OWNER_ID,
  prefix: process.env.PREFIX,
};

client.on("ready", () => {
  console.log(`Loogged in as ${client.user.tag}`);
});

client.on("message", (msg) => {
  if (msg.content === "ping") {
    msg.reply("pong");
  }
});

client.login(config.token);
