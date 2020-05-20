const server = require('./server');

server.listen({port: 5006}).then(({url}) => {
    console.log("Lawyersr service running at: " + url);
});
