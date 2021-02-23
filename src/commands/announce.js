module.exports = {
	name: 'announce',
	description: 'announce command',
	// eslint-disable-next-line no-unused-vars
	execute(message, args, webHook) {
		const msg = args.join(' ');

		webHook.send(msg);
		message.delete();
	},
};