const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('clone')
        .setDescription('Clone server structure and permissions')
        .addStringOption(option =>
            option.setName('serverid')
                .setDescription('ID of the server to clone')
                .setRequired(true)),
    async execute(interaction) {
        const serverId = interaction.options.getString('serverid');
        const targetGuild = interaction.client.guilds.cache.get(serverId);

        if (!targetGuild) {
            return interaction.reply('Server not found or bot is not in that server.');
        }

        try {
            await interaction.reply('Starting the cloning process...');
            // Add cloning logic here
        } catch (error) {
            console.error('Error during cloning:', error);
            await interaction.reply('An error occurred while cloning the server.');
        }
    },
    executePrefix(message, args) {
        if (message.content.startsWith('+clone')) {
            const serverId = args[1];
            if (!serverId) {
                return message.channel.send('Please provide a server ID.');
            }

            const targetGuild = message.client.guilds.cache.get(serverId);
            if (!targetGuild) {
                return message.channel.send('Server not found or bot is not in that server.');
            }

            message.channel.send('Starting the cloning process...');
            // Add cloning logic here
        }
    }
};
              
