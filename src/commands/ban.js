module.exports = {
	name: 'ban',
	description: 'ban',
	// eslint-disable-next-line no-unused-vars
	execute(message, args) {
		const taggedUser = message.mentions.members.first();

		taggedUser.ban().then(() => {
			// Successmessage
			message.channel.send('Cultist has been put in springlock suit');
		});
	},
};