const Discord = require('discord.js');
const LD = require('languagedetect');
var ld = new LD();
var auth = require('./auth.json');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
	if(msg.author.id!=client.user.id){
		var x = ld.detect(msg.content);
		x.forEach(function(entry) {
			console.log(entry);
		});
		console.log();
	}
});

client.login(auth.token);