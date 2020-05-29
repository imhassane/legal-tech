const { ApolloServer } = require('apollo-server');
const {ApolloGateway, RemoteGraphQLDataSource} = require('@apollo/gateway');
const jwt = require('jsonwebtoken');

require('dotenv').config();

// Initialization of the database connection.
const { Pool } = require('pg');

const pool = new Pool();

// -------- SQL QUERIES ------------
const GET_USER_PERMISSION = `
    SELECT
        permission
    FROM tj_credentials_permission
    WHERE cre_id = $1
`;

// ------------------------------------

const gateway = new ApolloGateway({
    serviceList: [
        {url: "http://localhost:5001/graphql", name: 'users'},
        {url: "http://localhost:5002/graphql", name: 'articles'},
        {url: "http://localhost:5003/graphql", name: 'companies'},
        {url: "http://localhost:5004/graphql", name: 'contacts'},
        {url: "http://localhost:5005/graphql", name: 'domains'},
        {url: "http://localhost:5006/graphql", name: 'lawyers'},
        {url: "http://localhost:5007/graphql", name: 'educations'},
        {url: "http://localhost:5008/graphql", name: 'authentication'},
    ],
    buildService: ({url}) => new RemoteGraphQLDataSource({
        url,
        willSendRequest: ({request, context}) => {
            if(context.user) request.http.headers.set("user", JSON.stringify(context.user));
            if(context.permissions) request.http.headers.set("permissions", JSON.stringify(context.permissions));
        }
    })
});

// Context of the server.
const context = async ({ req }) => {
    let context = {};
    const token = req.headers["authorization"];
    try {
        const payload = await jwt.verify(token, process.env.JWT_SECRET);
        context = { ...context, user: payload.id };

        const { rows } = await pool.query(GET_USER_PERMISSION, [payload.id]);
        const permissions = rows.map(r => r.permission);
        context = { ...context, permissions };

    } catch(ex) {
        context = { ...context, user: null };
    }

    return context;
};

const server = new ApolloServer({
    gateway,
    context,
    subscriptions: false
});

server.listen({port: 5000}).then(({url}) => {
    console.log("API Gateway running at: " + url);
})