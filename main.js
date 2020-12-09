const Discord = require('discord.js');
require("dotenv").config();

const client = new Discord.Client();

const prefix = '.';

client.once('ready', () => {
    console.log('pogbot woke up. Sweet Dreams!');
});

client.on('message', message =>{
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split("/ +/");
    const command = args.shift().toLowerCase();

    if(command === 'pog'){
        message.channel.send('https://i.imgur.com/Pp3Ra0N.png%27');
    } else if (command == 'apog'){
        message.channel.send('https://tenor.com/view/pogchamp-pog-pogey-poggers-twitch-gif-14340727');
    } else if (command == 'cmdidea'){
      message.channel.send
      ('https://forms.gle/6pgSEqR1adzytjWbA');
    } else if (command == 'cmdideas'){
      message.channel.send
      ('https://forms.gle/6pgSEqR1adzytjWbA');
    } else if (command == 'fishpog'){
      message.channel.send
      ('https://tenor.com/view/pog-fish-fish-mouth-open-gif-17487624');
    } else if (command == 'cmdlist'){
    message.channel.send
    ('https://www.chubins.tk/commands');
    } else if (command == 'creators'){
    message.channel.send
    ('pogbot is by Chubins with help from IIJJ22GG and Beatso. Random ideas by DTRW191.');
    } else if (command == 'howpog'){
    message.channel.send
    ('very pog');
    } else if (command == 'ulrafpog'){
    message.channel.send
    ('https://imgur.com/K0GswLw');
    } else if (command == 'pepepog'){
      message.channel.send
      ('https://i0.wp.com/nerdschalk.com/wp-content/uploads/2020/08/pogger.png?resize=311%2C307&ssl=1');
    } else if (command == 'pogbotfanboy'){
    message.channel.send
    ('<@209630524434546688>');
    } else if (command == 'monkeypog'){
      message.channel.send
    ('https://i.redd.it/jxor0j2ky0j51.jpg');
    } else if (command == 'ping'){
        message.channel.send('Pog!').then(m =>{
            var ping = m.createdTimestamp - message.createdTimestamp;
            var embed = new Discord.MessageEmbed()
            .setAuthor(`⏱ ${ping}ms`)
            .setColor('ff0000')
            m.edit(embed)
            console.log(`Bot Pinged at ${message.createdAt} for ${ping}ms`)
        })
    }
});

client.login(process.env.bottoken)

const keepAlive = require('./server');
keepAlive();
