module.exports = {
	name: 'kick',
	description: 'kick',
	// eslint-disable-next-line no-unused-vars
	execute(message, args) {
		const taggedUser = message.mentions.members.first();

		taggedUser.kick().then(() => {
			// Successmessage
			message.channel.send('Cultist has been forcefully dragged out of the cult');
		});
	},
};