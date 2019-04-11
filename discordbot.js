const Discord = require('discord.js');
const discordAuth = require('discord_auth.json');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('pong');
  }
});

function init(){
  client.login(discordAuth.token);
}