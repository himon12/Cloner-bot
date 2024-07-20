const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('changeprefix')
        .setDescription('Change the bot prefix')
        .addStringOption(option =>
            option.setName('newprefix')
                .setDescription('The new prefix for the bot')
                .setRequired(true)),
    async execute(interaction) {
        const newPrefix = interaction.options.getString('newprefix');
        interaction.client.prefixes[interaction.guild.id] = newPrefix;
        fs.writeFileSync(prefixFilePath, JSON.stringify(interaction.client.prefixes, null, 2));
        await interaction.reply(`Prefix changed to: ${newPrefix}`);
    }
};
