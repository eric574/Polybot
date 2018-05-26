const Discord = require('discord.js');
const DetectLanguage = require('detectlanguage');
var auth = require('./auth.json');
const client = new Discord.Client();

const adminCmds = require('./adminCmds');

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
    console.log(`Bot has started, with ${client.users.size} users, in ${client.channels.size} channels of ${client.guilds.size} guilds.`);
    client.user.setActivity(`Serving ${client.guilds.size} servers`);
});

client.on('message', async message => {
	if (message.author.bot) return; // Avoid spamming with other bots
	let command = message.content;
	if (adminCmd.checkAdmin(message)) return;
	else {
		switch(command) {
			case '?TRANSLATE':
				message.reply('Doing translate feature!');
				break;
			case '?DETECT':
				message.reply('Doing detection feature!');
				break;
			// Can use the built-in text-to-speech feature for this
			case '?TTS':
				message.reply('Doing text-to-speech feature!');
				break;
			case '?SENTIMENT':
				message.reply('Doing the sentiment-analyzing!');
				break;
		}	
	}
});