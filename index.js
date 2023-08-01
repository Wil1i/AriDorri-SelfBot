const { Client } = require("discord.js-selfbot-v13");
const client = new Client({
  checkUpdate: false,
});

const token = "";

client.on("ready", () => {
  console.log("Ready !");
  client.user.setActivity("AriDorri", {
    type: "STREAMING",
    url: "https://twitch.tv/aridorri",
  });
});

client.login(token);
