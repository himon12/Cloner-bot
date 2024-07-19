const { Client, Intents } = require('discord.js');
const { token } = require('./config.json');
const commandHandler = require('./handlers/commandHandler');
const eventHandler = require('./handlers/eventHandler');
const errorHandler = require('./handlers/errorHandler');
const logger = require('./utils/logger');

const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

commandHandler(client);
eventHandler(client);
errorHandler(client);

client.login(token);
                                      
