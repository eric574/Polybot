const Discord = require('discord.js');
const DetectLanguage = require('detectlanguage');
var auth = require('./auth.json');
const client = new Discord.Client();
var detectLanguage = new DetectLanguage({
    key:'c6378c3e5bf306205bdee72bc263b5d2'
});
var languages = {};
detectLanguage.languages(function(error, result) {
    //console.log(result);
    languages=result;
});

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

var string_languages = "";
var percent = 0.0;
var lang_cnt = 0;
var total_cnt = 0;
// var total_cnt = languages.length;
// if (total_cnt) console.log(totaL_cnt);
const set1 = new Set();
const set2 = new Set();

client.on('message', msg => {
    if (msg.author.id != client.user.id) {
        percent = lang_cnt = 0;
        detectLanguage.detect(msg.content, function(error, result) {
            var lang = result[0]["language"];
            var reliable = result[0]["isReliable"];
            //console.log(JSON.stringify(a));
            // console.log(lang);
            // console.log(reliable);
            if (reliable) {
                languages.forEach(function(language) {
                    // console.log(language);
                    if (language["code"] === lang) {
                        // msg.channel.send(language["name"]);
                        lang_cnt++;
                        set1.add(language["name"]);
                        string_languages += language["name"];
                    }
                });
                if (languages.length) percent = 1.0 * lang_cnt / languages.length;
                //msg.channel.send(l);
                msg.channel.send("Languages: ");
                for (let x of set1) {
                    msg.channel.send(x);
                }
                if (percent) msg.channel.send("Percentage: " + percent + "%");
            }
        });
    }
});
client.login(auth.token);