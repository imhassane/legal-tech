const server = require('./server');

server.listen({port: 5004}).then(({url}) => {
    console.log("User service running at: " + url);
});
