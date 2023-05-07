import { createRequire } from "module";
const require = createRequire(import.meta.url)
import { ApolloServer } from '@apollo/server';
import { expressMiddleware } from '@apollo/server/express4';
import { ApolloServerPluginDrainHttpServer } from '@apollo/server/plugin/drainHttpServer';
import express from 'express';
import http from 'http';
import cors from 'cors';
import bodyParser from 'body-parser';
const { json } = bodyParser;
const { sequelize } = require('./models')
const resolvers =  require("./resolvers");
const typeDefs = require('./schema/typeDefs')
// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
const app = express();
// Our httpServer handles incoming requests to our Express app.
// Below, we tell Apollo Server to "drain" this httpServer,
// enabling our servers to shut down gracefully.
const httpServer = http.createServer(app);
const server = new ApolloServer({
  typeDefs,
  resolvers,
  plugins: [
    ApolloServerPluginDrainHttpServer({ httpServer })
],
});

// Passing an ApolloServer instance to the `startStandaloneServer` function:
//  1. creates an Express app
//  2. installs your ApolloServer instance as middleware
//  3. prepares your app to handle incoming requests
await server.start();
app.use(
    '/graphql',
    cors(),
    json(),
    expressMiddleware(server, {
        context: async ({ req, res }) => {
            return res
        },
    }),
);
const PORT = process.env.PORT || 4190;


httpServer.listen(PORT, () => {
    console.log(`🚀 Query endpoint ready at http://localhost:${PORT}/graphql`);
    console.log(`🚀 Subscription endpoint ready at ws://localhost:${PORT}/graphql`);
    sequelize.authenticate()
        .then(() => console.log("database connected!"))
        .catch(err => console.log(err))
});

