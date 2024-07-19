const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('ping')
        .setDescription('Replies with Pong!'),
    async execute(interaction) {
        await interaction.reply('Pong!');
    },
    executePrefix(message) {
        if (message.content.startsWith('+ping')) {
            message.channel.send('Pong!');
        }
    }
};
          
