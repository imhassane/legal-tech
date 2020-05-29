const server = require('./server');

server.listen({port: 5005}).then(({url}) => {
    console.log("Domains service running at: " + url);
});
