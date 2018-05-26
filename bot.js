const Discord = require('discord.js');
const DetectLanguage = require('detectlanguage');
var auth = require('./auth.json');
const client = new Discord.Client();
var detectLanguage = new DetectLanguage({
    key:'c6378c3e5bf306205bdee72bc263b5d2'
});
var languages={};
detectLanguage.languages(function(error,result){
    //console.log(result);
    languages=result;
});

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

var lang_cnt = 0, total_cnt = 0;
var detected_languages = [];
var percentages = [];
var obj = {};
var obj1 = {};
var valid_words = [];
valid_words[0] = "a";
valid_words[1] = "i";
valid_words[2] = "o";

client.on('message', msg => {
    if(msg.author.id != client.user.id){
        detectLanguage.detect(msg.content, function(error, result) {
            var defaultLang = "ENGLISH"; // Set english as default for now
            var lang = result[0]["language"];
            var reliable = result[0]["isReliable"];
        if (msg.content.split(" ").length == 1) {
            //console.log(JSON.stringify(a));
            //console.log(l);
            //console.log(r);
            if(reliable){
                languages.forEach(function(language){
                    //console.log(entry);
                    if (msg.content.length() == 1) {
                        msg.channel.send("ENGLISH \nPercentage: 100%");
                    }
                    else if(language["code"]===lang){
                        defaultLang=language["name"];
                        //msg.channel.send(language["name"]);
                    }
                });
                msg.channel.send(defaultLang + "\nPercentage: 100%");
                //msg.channel.send(l);
            }
            else {
                // Check for valid one-letter English words
                for (var key in valid_words) {
                    var equal = (valid_words[key].toUpperCase() == msg.content.toUpperCase());
                    if (equal) {
                        msg.channel.send("ENGLISH \nPercentage: 100%");
                        return;
                    }
                }
                msg.channel.send("Sorry, please enter a valid word");
                return;
            }
        }
            else if (msg.content.split(" ").length > 1) {
                total_cnt = msg.content.split(" ").length;
                // msg.channel.send(total_cnt);
                console.log(msg.content.split(" "));
                detectLanguage.detect(msg.content.split(" "),function(error,result){
                    // console.log(result);
                        result.forEach(function(entry){
                        // console.log(entry);
                        var lang = entry[0]["language"];
                        var reliable = entry[0]["isReliable"];
                        lang_cnt = 0
                        if(reliable){
                            languages.forEach(function(language){
                                //console.log(entry);
                                if(language["code"]===lang){
                                    detected_languages.push(language["code"]);
                                    // msg.channel.send(language["name"]);
                                    lang_cnt++;
                                    var percent = Math.round((100.0 * lang_cnt / total_cnt) * 100) / 100; 
                                    var per = "Percentage: " + percent.toString() + "%";
                                    percentages.push(percent);
                                    console.log(language["name"]);
                                    console.log(per);
                                    msg.channel.send(language["name"]);
                                    msg.channel.send(per);
                                    /*obj = {
                                        key1: language["name"],
                                        key2: per
                                    }*/
                                }
                            });
                            process.on('unhandledRejection', (reason, p) => {
                                console.log('Unhandled Rejection at: Promise', p, 'reason:', reason);
                                // application specific logging, throwing an error, or other logic here
                            });
                        }
                        else {
                            msg.channel.send(defaultLang);
                        }
                    });
                    //msg.channel.send(l);
                });
            }
        });
    }
});
client.login(auth.token);