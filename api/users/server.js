const { ApolloServer, gql } = require('apollo-server');
const { buildFederatedSchema } = require('@apollo/federation');
const { importSchema } = require('graphql-import');
const GraphQLDateTime = require('graphql-type-datetime');

const typeDefs = gql(importSchema('./schemas/schema.graphql'));

const resolvers = {
    ...require('./resolvers'),
    DateTime: GraphQLDateTime
};

const schema = buildFederatedSchema({ typeDefs, resolvers });

const server = new ApolloServer({
    schema
});

module.exports = server;
