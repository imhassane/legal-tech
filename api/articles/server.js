const { ApolloServer, gql } = require('apollo-server');

const { importSchema } = require('graphql-import');
const { makeExecutableSchema } = require('graphql-tools');

const typeDefs = importSchema('./schemas/schema.graphql');
const resolvers = require('./resolvers');

const server = new ApolloServer({
    schema: makeExecutableSchema({ typeDefs, resolvers })
});

module.exports = server;
