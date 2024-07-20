const { CommandInteraction, SlashCommandBuilder } = require('discord.js');
const path = require('path');
const templatesFilePath = path.join(__dirname, '../templates.json');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('template')
        .setDescription('Get a predefined server ID for a template')
        .addStringOption(option =>
            option.setName('template')
                .setDescription('Name of the template')
                .setRequired(true)),
    async execute(interaction) {
        const templateName = interaction.options.getString('template');
        const templates = require('../templates.json');
        const serverId = templates[templateName];

        if (!serverId) {
            return interaction.reply('Template not found.');
        }

        await interaction.reply(`The server ID for the template '${templateName}' is: ${serverId}`);
    }
};
