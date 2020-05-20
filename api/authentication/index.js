const server = require('./server');

server.listen({port: 5008}).then(({url}) => {
    console.log("Authentication service running at: " + url);
});
