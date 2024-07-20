const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('help')
        .setDescription('Provides information about available commands'),
    async execute(interaction) {
        const commands = interaction.client.commands;
        let helpMessage = 'Here are the available commands:\n\n';

        commands.forEach((command) => {
            helpMessage += `**/${command.data.name}**: ${command.data.description}\n`;
        });

        await interaction.reply(helpMessage);
    }
};
