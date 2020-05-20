const { ApolloServer, gql } = require('apollo-server');
const {ApolloGateway, RemoteGraphQLDataSource} = require('@apollo/gateway');

const gateway = new ApolloGateway({
    serviceList: [
        {url: "http://localhost:5002/graphql", name: 'articles'},
        {url: "http://localhost:5001/graphql", name: 'users'},
        {url: "http://localhost:5003/graphql", name: 'companies'},
        {url: "http://localhost:5004/graphql", name: 'contacts'},
        {url: "http://localhost:5005/graphql", name: 'domains'},
    ]
});

const server = new ApolloServer({
    gateway,
    subscriptions: false
});

server.listen({port: 5000}).then(({url}) => {
    console.log("API Gateway running at: " + url);
})