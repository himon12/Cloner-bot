const fs = require('fs');
const path = require('path');
const prefixFilePath = path.join(__dirname, '../prefixes.json');

module.exports = (client) => {
    // Load prefixes from file if it exists
    if (fs.existsSync(prefixFilePath)) {
        client.prefixes = JSON.parse(fs.readFileSync(prefixFilePath, 'utf-8'));
    }

    // Save prefixes to file
    const savePrefixes = () => {
        fs.writeFileSync(prefixFilePath, JSON.stringify(client.prefixes, null, 2));
    };

    client.on('guildCreate', guild => {
        // Set default prefix for new guild
        client.prefixes[guild.id] = client.prefix;
        savePrefixes();
    });

    client.on('guildDelete', guild => {
        // Remove prefix for deleted guild
        delete client.prefixes[guild.id];
        savePrefixes();
    });

    // Command to change prefix
    client.commands.get('changeprefix').executePrefix = async (message, args) => {
        if (!args.length) {
            return message.channel.send(`The current prefix is: ${client.prefixes[message.guild.id] || client.prefix}`);
        }

        const newPrefix = args[0];
        client.prefixes[message.guild.id] = newPrefix;
        savePrefixes();
        message.channel.send(`Prefix changed to: ${newPrefix}`);
    };
};
                                                                  
