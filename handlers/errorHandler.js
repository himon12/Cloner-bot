module.exports = (client) => {
    process.on('unhandledRejection', (error) => {
        console.error('Unhandled promise rejection:', error);
    });

    process.on('uncaughtException', (error) => {
        console.error('Uncaught exception:', error);
    });

    client.on('error', (error) => {
        console.error('Client error:', error);
    });

    client.on('warn', (info) => {
        console.warn('Client warning:', info);
    });
};
