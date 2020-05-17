const server = require('./server');

server.listen({port: 5002}).then(({url}) => {
    console.log("Document service running at: " + url);
});
