const { ApolloServer, gql } = require('apollo-server');
const {ApolloGateway, RemoteGraphQLDataSource} = require('@apollo/gateway');

const gateway = new ApolloGateway({
    serviceList: [
        {url: "http://localhost:5002/graphql", name: 'articles'},
        {url: "http://localhost:5001/graphql", name: 'users'},
    ]
});

const server = new ApolloServer({
    gateway,
    subscriptions: false
});

server.listen({port: 5000}).then(({url}) => {
    console.log("API Gateway running at: " + url);
})