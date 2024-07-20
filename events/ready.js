const logger = require('../utils/logger');

module.exports = {
    name: 'ready',
    once: true,
    execute(client) {
        logger.info(`Logged in as ${client.user.tag}!`);
        client.user.setActivity(`in ${client.guilds.cache.size} servers | /help`, { type: 'WATCHING' });
    },
};
