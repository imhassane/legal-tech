const { ApolloServer, gql } = require('apollo-server');

const { importSchema } = require('graphql-import');
const { buildFederatedSchema } = require('@apollo/federation');

const typeDefs = gql(importSchema('./schemas/schema.graphql'));
const resolvers = require('./resolvers');

const schema = buildFederatedSchema({typeDefs, resolvers})

const server = new ApolloServer({
    schema
});

module.exports = server;
