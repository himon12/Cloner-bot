const path = require('path');
const templatesFilePath = path.join(__dirname, '../templates.json');

module.exports = {
    data: {
        name: 'template',
        description: 'List all available templates and their server IDs'
    },
    async execute(interaction) {
        const templates = require('../templates.json');
        let response = 'Available templates:\n\n';

        for (const [key, value] of Object.entries(templates)) {
            response += `**${key}**: ${value}\n`;
        }

        await interaction.reply(response);
    }
};
