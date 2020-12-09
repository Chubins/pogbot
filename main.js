const Discord = require('discord.js');
require("dotenv").config();

const client = new Discord.Client();

const prefix = '.';

client.once('ready', () => {
    console.log('pogbot is online!');
});

client.on('message', message =>{
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split("/ +/");
    const command = args.shift().toLowerCase();

    if(command === 'pog'){
        message.channel.send('https://i.imgur.com/Pp3Ra0N.png');
    } else if (command == 'apog'){
        message.channel.send('https://tenor.com/view/pogchamp-pog-pogey-poggers-twitch-gif-14340727')
    }
});

client.login(process.env.bottoken)

const keepAlive = require('./server');
keepAlive();
