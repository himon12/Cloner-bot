module.exports = (client) => {
    client.on('ready', () => {
        console.log(`Logged in as ${client.user.tag}!`);
    });

    client.on('error', console.error);

    // Handle other events as needed
};
