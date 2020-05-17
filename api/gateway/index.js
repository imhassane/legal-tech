const { ApolloServer, gql } = require('apollo-server');

const typeDefs = gql`
    type Query {
        hello: String
    }
`;

const resolvers = {
    Query: {
        hello: (parent, args, context) => {
            return "Hello, world!";
        }
    }
};

const server = new ApolloServer({
    typeDefs,
    resolvers
});

server.listen({port: 5000}).then(({url}) => {
    console.log("API Gateway running at: " + url);
})