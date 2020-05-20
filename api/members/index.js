const server = require('./server');

server.listen({port: 5001}).then(({url}) => {
    console.log("User service running at: " + url);
});
