const server = require('./server');

server.listen({port: 5003}).then(({url}) => {
    console.log("Companies service running at: " + url);
});
