const Discord = require('discord.js');
const client = new Discord.Client();
var roblox = require('roblox-js');
var general = "386643068608315392"
var announcements = "386644309493153803"
var roomescapebotlog = "389211679038373889"
var blue = "389210671855828994"
var yellow = "389210670455062529"
var red = "389210668450054144"
var pink = "389210666470211586"
var cyan = "389210651358134287"
var black = "389210673546133507"
function getRandomInt1(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

//roblox.login({username: process.env.BOT_USERNAME, password: process.env.BOT_PASSWORD}).then((success) => {

//}).catch(() => {console.log("Sorry, it failed.");});
client.on('ready',() => {
  console.log('Room Escape Bot Online')
  client.user.setGame('Type -help for help!')
})
client.on('messageDelete', function(m){
  let ch = m.channel
	let guild = ch.guild
	guild.channels.get(roomescapebotlog).send({embed: {
	    color: 3447003,
	    author: {
	      name: m.author.username,
	      icon_url: m.author.avatarURL
	    },
	    title: "Message Deleted",
	    description: "**Message Deleted Logs**",
	    fields: [{
	        name: "Message",
	        value: ("Message: ***\"" + m + "\"***")
	      },
	      {
	        name: "Author",
	        value: ("Author: ***"+ m.author.username+"***")
	      },
	      {
	        name: "Channel",
	        value: ("Channel: "+ ch)
	      }
	    ],
	    timestamp: new Date(),
	    footer: {
	      icon_url: client.user.avatarURL,
	      text: "©Room Escape Bot Logs"
	    }
	  }
	});
})
const swearWords = ["nigga","nigger","niglet","nig","fuk","penis","rape","queer","retard","dike","kike","slut","whore","shit","fuck","damn","bitch","dick","pussy","fag","cock","asshole","faggot","fag","bastard","cunt","douche","fucker"];
client.on('message',message =>{
if( swearWords.some(word => message.content.toLowerCase().includes(word)) ) {
 message.delete()
	message.author.send
}
})

client.on('messageUpdate', function(oldm,newm){
	if(oldm.content === newm.content) return;
	if( swearWords.some(word => newm.content.toLowerCase().includes(word)) ) {
 newm.delete()

}
})
client.on('guildMemberAdd',member =>{
	let guild = member.guild;
	guild.channels.get(general).send(`Welcome, ${member.user.username} to the Room Escape Official Discord! Have a good time here! :wink:`)
})
client.on('guildMemberRemove',member =>{
	let guild = member.guild;
	guild.channels.get(general).send(`Well, ${member.user.username} just left the Discord.. :sob:`)
})

client.on('messageUpdate', function(oldm,newm){
	if(oldm.content === newm.content) return;
  let ch = oldm.channel
	let guild = oldm.guild
	guild.channels.get(roomescapebotlog).send({embed: {
	    color: 3447003,
	    author: {
	      name: oldm.author.username,
	      icon_url: oldm.author.avatarURL
	    },
	    title: "Message Edited",
	    description: "**Message Update Logs**",
	    fields: [{
	        name: "Old Message",
	        value: ("Old Message: ***\"" + oldm + "\"***")
	      },
				{
		        name: "New Message",
		        value: ("New Message: ***\"" + newm + "\"***")
		      },
	      {
	        name: "Author",
	        value: ("Author: ***"+ oldm.author.username+"***")
	      },
	      {
	        name: "Channel",
	        value: ("Channel: "+ ch)
	      }
	    ],
	    timestamp: new Date(),
	    footer: {
	      icon_url: client.user.avatarURL,
	      text: "© Room Escape Bot Logs"
	    }
	  }
	});
})



var prefix = "-"
client.on('message', message => {
    let args = message.content.split(' ');
    var argsresult = args.join(' ');

    if (!message.content.startsWith(prefix)) return;

    if (message.author.bot) return;

    if (message.channel.type === "dm"){
      message.channel.send("Please use the Room Escape Discord for commands")
      return
    };

    if(message.content.startsWith(prefix+'help')){
      message.reply("A DM has been sent to you for help!")
      message.author.send({embed: {
        color: 3447003,
        title: "Basic Commands",
        description: "All commands must begin with the prefix (-)",
        fields: [{
       name: "help",
       value: "Gives you this menu!"
     },
     {
       name: "urban",
       value: "Search your definition on the Urban Dictionary! -urban [definition]"

     },
     {
       name: "ping",
       value: "Pong!"

     },
     {
       name: "invite",
       value: "Gives you the invite code to the server!"

     },
     {
       name: "listcolors",
       value: "Lists all the colors your can set your name"
     },
     {
       name: "color",
       value: "Changes the color of your name! -color [color]"

     }]
      }})
	  if(message.member.roles.find("name", "Bot Commander")){
      message.author.send({embed: {
        color: 3447003,
        title: "Moderation Commands",
        description: "All commands must begin with the prefix (-)",
        fields: [{
       name: "Shout (IN DEVELOPMENT, DOES NOT WORK)",
       value: "Shout something to the group! -shout [message]"
     },
     {
       name:"???",
       value: "??? (Coming soon)"
     }
]
      }

    })}
    } else
    if(message.content.startsWith(prefix+'ping')) {
message.channel.send('Pinging!').then(m => m.edit(`Pong! Latency is ${m.createdTimestamp - message.createdTimestamp}ms. API Latency is ${Math.round(client.ping)}ms`) );
    } else
	if(message.content.startsWith(prefix + 'urban')){
		let question = args[1];
		if(!question) return message.channel.send("You must provide something to search!")
		message.reply("The definition for, " + args[1] + ' is this: http://www.urbandictionary.com/define.php?term='+ args[1])
} else
  if(message.content.startsWith(prefix+'invite')){
    message.reply("The Discord invite code is: https://discord.gg/WnkvQhZ")
  }
  if(message.content.startsWith(prefix+'say')){
    if(message.member.roles.find("name", "Bot Commander")){
      if (args.length <=1) return
      message.delete()
    message.guild.channels.get(general).send(argsresult.slice(4))
  }
} else
  // if(message.content.startsWith(prefix+'spam')){
   //  message.reply("spamming bat")
    // message.guild.members.get("240222986605428746").send("spam")
 //} else
  if(message.content.startsWith(prefix+'color')){
    let color = args[1];
    if(!color) return message.reply("You must provide a color to choose from! Say \"-listcolors\" To view the colors")
    if(args[1] === "blue" || args[1] === "Blue"){
        message.member.removeRole(red,"ColorChange")
          message.member.removeRole(black,"ColorChange")
        message.member.removeRole(yellow,"ColorChange")
        message.member.removeRole(pink,"ColorChange")
        message.member.removeRole(cyan,"ColorChange")
        message.reply("Your name color is now blue!")
      message.member.addRole(blue,"ColorChange")
    } else {
      if(args[1] === "yellow" || args[1] === "Yellow"){
          message.member.removeRole(red,"ColorChange")
            message.member.removeRole(black,"ColorChange")
          message.member.removeRole(blue,"ColorChange")
          message.member.removeRole(pink,"ColorChange")
            message.member.removeRole(cyan,"ColorChange")
        message.reply("Your name color is now yellow!")
        message.member.addRole(yellow,"ColorChange")
      } else {
        if(args[1] === "red" || args[1] === "Red"){
            message.member.removeRole(blue,"ColorChange")
            message.member.removeRole(yellow,"ColorChange")
            message.member.removeRole(pink,"ColorChange")
              message.member.removeRole(black,"ColorChange")
              message.member.removeRole(cyan,"ColorChange")
          message.reply("Your name color is now red!")
          message.member.addRole(red,"ColorChange")
        } else  {
          if(args[1] === "pink" || args[1] === "Pink"){
              message.member.removeRole(red,"ColorChange")
              message.member.removeRole(blue,"ColorChange")
              message.member.removeRole(yellow,"ColorChange")
                message.member.removeRole(black,"ColorChange")
                message.member.removeRole(cyan,"ColorChange")
            message.reply("Your name color is now pink!")
            message.member.addRole(pink,"ColorChange")
          } else {
            if(args[1] === "Cyan" || args[1] === "cyan"){
                message.member.removeRole(red,"ColorChange")
                message.member.removeRole(blue,"ColorChange")
                message.member.removeRole(yellow,"ColorChange")
                  message.member.removeRole(black,"ColorChange")
                  message.member.removeRole(pink,"ColorChange")
              message.reply("Your name color is now cyan!")
              message.member.addRole(cyan,"ColorChange")
          } else {
            if(args[1] === "black" || args[1] === "Black"){
                message.member.removeRole(red,"ColorChange")
                  message.member.removeRole(cyan,"ColorChange")
                message.member.removeRole(blue,"ColorChange")
                message.member.removeRole(yellow,"ColorChange")
                  message.member.removeRole(pink,"ColorChange")
              message.reply("Your name color is now black!")
              message.member.addRole(black,"ColorChange")
          } else {
            if(args[1] === "none" || args[1] === "none"){
                message.member.removeRole(red,"ColorChange")
                message.member.removeRole(blue,"ColorChange")
                message.member.removeRole(yellow,"ColorChange")
                  message.member.removeRole(pink,"ColorChange")
                  message.member.removeRole(cyan,"ColorChange")
                    message.member.removeRole(black,"ColorChange")
              message.reply("Your name color has been removed")
            } else{
              message.reply("Invalid color, Say \"-listcolors\" To view the colors")
          }}}}}}}} else
            if(message.content.startsWith(prefix + 'listcolors')){
          		message.reply("The colors are: ```pink, cyan, red, blue, yellow, black, none``` more colors coming soon!")
          } else
	if(message.content.startsWith(prefix+'roll')){
		 if(message.member.roles.find("name", "Bot Commander")){
		   var x = getRandomInt1(args[1],args[1]);
			 
		}}
	

});


// roblox related stuff goes under here




//var groupId = "3653742"


 //function isCommand(command, message){
   //if (message.channel.type === "dm"){
   //  message.channel.send("Please use the Room Escape Discord for commands")
   //  return
  // }};


// client.on('message', (message) => {
// 	if (message.author.bot) return;
//       var args = message.content.split(' ');
//       var argsresult = args.join(' ');

//     if(isCommand('shout', message)){
//	 if(message.member.roles.find("name", "Bot Commander")){
// 	var command = command.toLowerCase();
// 	var content = message.content.toLowerCase();
// 	return content.startsWith(prefix + command);
//    	var shout = args[1]
//     	if (shout){
//     	roblox.shout(groupId,argsresult.slice(6))
//         message.reply("shouted the message:" + argsresult.slice(6))
//		}else {
//	message.reply("No permissions")
//	return
//	}
//	}}

// });
client.login(process.env.BOT_TOKEN)
