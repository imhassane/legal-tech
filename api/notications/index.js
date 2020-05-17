const server = require('./server');

server.listen({port: 5002}).then(({url}) => {
    console.log("Notification service running at: " + url);
});
