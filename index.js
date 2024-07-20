const { Client, GatewayIntentBits } = require('discord.js');
const { token } = require('./config.json');
const commandHandler = require('./handlers/commandHandler');
const eventHandler = require('./handlers/eventHandler');
const errorHandler = require('./handlers/errorHandler');
const prefixHandler = require('./handlers/prefixHandler');
const logger = require('./utils/logger');

// Initialize the client with necessary intents
const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
    ]
});

// Set default prefix and prefixes storage
client.prefix = '+';
client.prefixes = {}; // Store prefixes for each server

// Load handlers
commandHandler(client);
eventHandler(client);
errorHandler(client);
prefixHandler(client);

// Login the bot
client.login(token);
