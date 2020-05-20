const server = require('./server');

server.listen({port: 5007}).then(({url}) => {
    console.log("Education service running at: " + url);
});
