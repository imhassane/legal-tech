const server = require('./server');

server.listen({port: 5006}).then(({url}) => {
    console.log("Lawyers service running at: " + url);
});
