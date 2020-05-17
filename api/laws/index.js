const server = require('./server');

server.listen({port: 5002}).then(({url}) => {
    console.log("Laws service running at: " + url);
});
