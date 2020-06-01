const { ApolloServer, gql } = require('apollo-server');
const { importSchema } = require('graphql-import');
const { buildFederatedSchema } = require('@apollo/federation');
const environment = require('dotenv');

const GraphqlDatetime = require('graphql-type-datetime');

const databasePool = require('./database');

// Configuration of the environments variables.
environment.config();

const typeDefs = gql(importSchema("./schemas/schema.graphql"));

const resolvers = {
    DateTime: GraphqlDatetime,
    ...require('./resolvers')
};

const schema = buildFederatedSchema({ typeDefs, resolvers });

const context = ({ req }) => {
    let context = { pool: databasePool };

    const { user, permissions } = req.headers;
    if(user) context.user = parseInt(user);
    if(permissions) context.permissions = JSON.parse(permissions);

    return context;
}

const server = new ApolloServer({ schema, context });

module.exports = server;