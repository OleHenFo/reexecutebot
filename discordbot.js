const Discord = require('discord.js');
const discordAuth = require('./auth/discord_auth.json');
const ytdl = require('ytdl-core');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content.split(' ')[0] === '!play') {
    if (msg.member.voiceChannel) {
      msg.member.voiceChannel.join()
        .then(connection => {
          stream = ytdl(msg.content.split(' ')[1]);
          dispatcher = connection.playStream(stream);
          dispatcher.on('end', () => {
            connection.disconnect();
          });
        })
        .catch(console.log);
    } else {
      msg.reply('You need to join a voice channel first!');
    }
  }
});

(function() {
  module.exports.init = function() {
    client.login(discordAuth.token);
    return client;
  }
}());