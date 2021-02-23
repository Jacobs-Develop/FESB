module.exports = {
	name: 'server',
	description: 'server info',
	execute(message) {
		message.channel.send(`This server's name is: ${message.guild.name}\nTotal members: ${message.guild.memberCount}\nCreated: ${message.guild.createdAt}\nOwner: ${message.guild.owner}\nOwnerID: ${message.guild.ownerID}\nVerification Level: ${message.guild.verificationLevel}\nServerID: ${message.guild.id}\nPartnered: ${message.guild.partnered}`);
	},
};