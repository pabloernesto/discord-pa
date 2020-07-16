const Discord = require('discord.js');
const client = new Discord.Client();
const config = require('./config.json');
const fs = require('fs');

// dynamically load commands
const commands = new Discord.Collection();
fs.readdirSync('./commands')                  // list commands dir
  .filter(file => file.endsWith('.js'))       // keep only js files
  .map(file => require(`./commands/${file}`)) // import command code
  .forEach(c => commands.set(c.name, c));     // register commands

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (!msg.content.startsWith(config.prefix)) return;

  // break apart the message
  // first slice off the prefix, then separate command and rest of message
  // eg: '!shout hello' -> 'shout hello' -> { command: 'shout', rest: 'hello' }
  const re = /^(?<command>\S+)(\s+(?<rest>.*))?$/;
  const match = msg.content.slice(config.prefix.length).match(re);
  if (match === null) {
    console.error(error);
    return;
  }
  const { command, rest } = match.groups;

  if (!commands.has(command)) {
    msg.reply(`No ${command} command`)
    return;
  };

  // catch errors in the execution of the command itself
  try {
    commands.get(command).execute(msg, rest);
  } catch (error) {
    console.error(error);
    msg.reply(`Error trying to execute command ${command}`);
  }
});

client.login(config.token);
