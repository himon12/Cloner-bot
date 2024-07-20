const { Collection } = require('discord.js');
const fs = require('fs');
const path = require('path');

module.exports = (client) => {
    client.commands = new Collection();

    const commandFiles = fs.readdirSync(path.join(__dirname, '../commands')).filter(file => file.endsWith('.js'));

    for (const file of commandFiles) {
        const command = require(path.join(__dirname, '../commands', file));
        if (command.data) {
            client.commands.set(command.data.name, command);
        }
    }

    client.on('interactionCreate', async (interaction) => {
        if (!interaction.isCommand()) return;

        const command = client.commands.get(interaction.commandName);

        if (!command) return;

        try {
            await command.execute(interaction);
        } catch (error) {
            console.error(error);
            await interaction.reply({ content: 'There was an error while executing this command!', ephemeral: true });
        }
    });
};
