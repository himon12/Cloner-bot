module.exports = {
    name: 'messageCreate',
    async execute(message) {
        if (message.author.bot) return;

        const args = message.content.slice(1).trim().split(/ +/);
        const commandName = args.shift().toLowerCase();

        const command = message.client.commands.get(commandName);
        if (command) {
            command.executePrefix(message, args);
        }
    },
};
