const Discord = require('discord.js');

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
    } else if (command == 'pogbotinfo'){
        message.channel.send('pogbot was made by Chubins#8664. His website is https://www.chubins.tk. His discord is https://discord.gg/uUK9UVV . Add pogbot to your server here: https://www.chubins.tk/projects')
    }
});

client.login('Nzc2MjI1MjI4NzgyOTYwNjUw.X6xyFA.M8tUWinFe1AQab26GVoMVonSfo4');

const keepAlive = require('./server');
keepAlive();