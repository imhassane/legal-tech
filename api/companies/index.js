const server = require('./server');

server.listen({port: 5003}).then(({url}) => {
    console.log("User service running at: " + url);
});
