const { prefix, token, webhook_id, webhook_token } = require('./config.json');

const fs = require('fs');


const Discord = require('discord.js');
const client = new Discord.Client({
	partials: ['MESSAGE', 'REACTION'],
});
client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync(__dirname + '/commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const command = require(__dirname + `/commands/${file}`);

	// set a new item in the Collection
	// with the key as the command name and the value as the exported module
	client.commands.set(command.name, command);
}

client.once('ready', () => {
	console.log(`${client.user.tag} is now fully operative.`);
});

client.on('message', message => {
	if (!message.content.startsWith(prefix) || message.author.bot) return;

	const args = message.content.slice(prefix.length).trim().split(/ +/);
	const command = args.shift().toLowerCase();
	const webHook = new Discord.WebhookClient(
		webhook_id, webhook_token,
	);

	if (!client.commands.has(command)) return;

	try {
		client.commands.get(command).execute(message, args, webHook);
	}
	catch (error) {
		console.error(error);
		message.reply('there was a problem in executing command');
	}

});

client.on('messageReactionAdd', (reaction, user) => {
	const { name } = reaction.emoji;
	const member = reaction.message.guild.members.cache.get(user.id);
	if (reaction.message.id === '807589391723528218') {
		switch (name) {
		case '🔪':
			member.roles.add('806435451203485698');
			break;
		case '📚':
			member.roles.add('806435362284503080');
			break;
		}
	}
});

client.on('messageReactionRemove', (reaction, user) => {
	const { name } = reaction.emoji;
	const member = reaction.message.guild.members.cache.get(user.id);
	if (reaction.message.id === '807589391723528218') {
		switch (name) {
		case '🔪':
			member.roles.remove('806435451203485698');
			break;
		case '📚':
			member.roles.remove('806435362284503080');
			break;
		}
	}
});

client.login(token);
