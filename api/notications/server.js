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

module.exports = server;
