const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('help')
        .setDescription('List all commands'),
    async execute(interaction) {
        const commands = [
            '+ping - Replies with Pong!',
            '+clone [serverid] - Clone server structure',
            '/ping - Replies with Pong!',
            '/clone [serverid] - Clone server structure'
        ];
        await interaction.reply(`Available commands:\n${commands.join('\n')}`);
    },
    executePrefix(message) {
        if (message.content.startsWith('+help')) {
            const commands = [
                '+ping - Replies with Pong!',
                '+clone [serverid] - Clone server structure'
            ];
            message.channel.send(`Available commands:\n${commands.join('\n')}`);
        }
    }
};
