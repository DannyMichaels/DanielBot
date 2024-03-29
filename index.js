const Discord = require('discord.js');
require('dotenv').config();

const client = new Discord.Client();

const prefix = process.env.PREFIX;

const fs = require('fs');

client.commands = new Discord.Collection();

const commandFiles = fs
  .readdirSync('./commands')
  .filter((file) => file.endsWith('.js'));

for (const file of commandFiles) {
  const command = require(`./commands/${file}`);

  client.commands.set(command.name, command);
}

client.once('ready', () => {
  console.log(`${client.user.username} is online!`);

  // setInterval(() => {
  //   client.channels.cache
  //     .get('1044000628084572211')
  //     .send('<@797656862308302879> COD NOW');
  // }, 1000);
});

client.on('message', async (message) => {
  if (!message.content.startsWith(prefix) || message.author.bot) return;

  const args = message.content.slice(prefix.length).split(/ +/);
  const command = args.shift().toLowerCase();

  if (command === 'ping') {
    client.commands.get('ping').execute(message, args);
  } else if (command === 'kick') {
    client.commands.get('kick').execute(message, args);
  } else if (command === 'ban') {
    client.commands.get('ban').execute(message, args);
  } else if (command === 'meme') {
    await client.commands.get('meme').execute(message, args);
  } else if (command === 'clearchat') {
    await client.commands.get('clearchat').execute(message, client);
  } else if (command === 'botsay') {
    await client.commands.get('botsay').execute(message, client, args);
  }
});

client.login(process.env.TOKEN);
