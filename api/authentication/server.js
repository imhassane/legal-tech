const { ApolloServer, gql } = require('apollo-server');
const { importSchema } = require('graphql-import');
const { buildFederatedSchema } = require('@apollo/federation');

const GrapqhDatetime = require('graphql-type-datetime');
const environment = require('dotenv');

const typeDefs = gql(importSchema("./schemas/schema.graphql"));

environment.config();

// Adding the database.
const pool = require('./database');

const resolvers = {
    DateTime: GrapqhDatetime,
    ...require('./resolvers')
};

const schema = buildFederatedSchema({ typeDefs, resolvers });

const context = () => {
    return {
        pool
    }
};

const server = new ApolloServer({ schema, context });

module.exports = server;