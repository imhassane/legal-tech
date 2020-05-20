const { ApolloServer, gql } = require('apollo-server');
const { importSchema } = require('graphql-import');
const { buildFederatedSchema } = require('@apollo/federation');

const GrapqhDatetime = require('graphql-type-datetime');
const environment = require('dotenv');

// Getting the pool.
const databasePool = require('./startup/database');

// Configuration of the environments variables.
environment.config();

const typeDefs = gql(importSchema("./schemas/schema.graphql"));
const resolvers = {
    DateTime: GrapqhDatetime,
    ...require('./resolvers'),
};
const schema = buildFederatedSchema({ typeDefs, resolvers });

const context = () => {
    return {
        pool: databasePool
    }
};

const server = new ApolloServer({ schema, context });

module.exports = server;