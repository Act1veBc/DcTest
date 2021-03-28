const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = '!';
const fs = require('fs');

const { measureMemory } = require('vm');

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);

    client.commands.set(command.name, command);
}

client.once('ready', () => {
    console.log('Steven 2.0 is online WooHoo!');
});

client.login('ODI1MzcwMzY5NDA1ODc4Mjkz.YF88Dg.EdVeJrTyCRCwOYGr8_z6Hy-K8cc');