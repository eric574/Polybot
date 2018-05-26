const Discord = require('discord.js');
const LD = require('languagedetect');
const DL = require('detectlanguage');
var ld = new LD();
var auth = require('./auth.json');
const client = new Discord.Client();
var detectLanguage = new DL({
	key:'c6378c3e5bf306205bdee72bc263b5d2'
});


client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
	if(msg.author.id!=client.user.id){
		detectLanguage.detect(msg.content, function(error, result) {
			var a = result;
			var l = result[0]["language"];
			var r = result[0]["isReliable"];
			console.log(JSON.stringify(a));
			console.log(l);
			console.log(r);
			if(r)msg.channel.send(l);
		});
	}
});

client.login(auth.token);