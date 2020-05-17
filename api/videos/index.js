const server = require('./server');

server.listen({port: 5002}).then(({url}) => {
    console.log("Video service running at: " + url);
});
