const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = "-";
const fs = require("fs");

client.once('ready', () => {
	console.log('Ready!');
});

client.on('message', message => {
	if (message.content.startsWith(`${prefix}ping`)) {
		message.channel.send('Pong.');
	} else if (message.content.startsWith(`#beep`)) {
		message.channel.send('Boop.');
	} else if (message.content.startsWith(`holy carp`)) {
		message.channel.send(`*crap*`)
	} else if (message.content.startsWith(`yeet the kids`)) {
		message.channel.send(`dont yeet them, eat them`)
	} else if (message.content.startsWith(`!fs`)) {
		message.channel.send(`stop skippin`)
	} else if (message.content.startsWith(`${prefix}RED SUS`)){
		message.channel.send(`. 　　　。　　　　•　 　ﾟ　　。 　　.`)
		message.channel.send(`　　　.　　　 　　.　　　　　。　　 。　. 　`)
		message.channel.send(`.　　 。　　　　　 ඞ 。 . 　　 • 　　　　•`)
		message.channel.send(`　　ﾟ　　 Red was not An Impostor.　 。　.`)
		message.channel.send(`　　'　　　 2  Impostor remains 　 　　。`)
		message.channel.send(`　　ﾟ　　　.　　　. ,　　　　.　 .`)

	} else if (message.content.startsWith(`${prefix}help`)) {
		message.channel.send(`my prifix is [-]`)
		message.channel.send(`bruh`)
		message.channel.send(`wich ever will it be?`)
	} else if (message.content === `${prefix}server`) {
		message.channel.send(`Server name: ${message.guild.name}\nTotal members: ${message.guild.memberCount}`);
	} else if (message.content === `fuck you`) {
		message.channel.send(`${message.author.username}\nYour IP: ${message.author.id}`);
	} else if (message.content.startsWith(`${prefix}number 15`)) {
		message.channel.send(`bergerking foot lettuce`)
	} else if (message.content.startsWith(`${prefix}have a break`)) {
		message.channel.send(`have a kit kat`)
	} else if (message.content.startsWith(`${prefix}roses-are-red-costers-go-in-a-loop`)) {
		message.channel.send(`i would like the famous bat soup`)
	} else if (message.content.startsWith(`${prefix}mcdonadls ice cream`)) {
		message.channel.send(`sorry the ice cream mechine is broken`)
	} else if (message.content.startsWith(`${prefix}dead body reported`)) {
		message.channel.send(`*where*`)
	} else if (message.content.startsWith(`${prefix}yeet`)) {
		message.channel.send(`the feet`)
	} else if (message.content.startsWith ('rick roll')) {
		message.channel.send('')
	}

	
});
client.login('nice try')
