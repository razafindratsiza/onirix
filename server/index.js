const { ApolloServer, PubSub } = require('apollo-server-express');
const { execute, subscribe } = require('graphql');
const { createServer } = require('http');
const express = require('express');
const ws = require('ws');

const pubsub = new PubSub();

// Define your schema and resolvers
const typeDefs = `
  type Query {
    hello: String
  }

  type Subscription {
    greeting: String
  }
`;

const resolvers = {
  Query: {
    hello: () => 'Hello World',
  },
  Subscription: {
    greeting: {
      subscribe: (_, __, { resourceId }) => {
        // Subscribe to the "GREETING" topic for the resourceId
        return pubsub.asyncIterator(`GREETING:${resourceId}`);
      },
    },
  },
};

// Create an Apollo Server instance
const server = new ApolloServer({
  typeDefs,
  resolvers,
  subscriptions: {
    path: '/subscriptions',
    onConnect: (connectionParams, webSocket, context) => {
      // Extract the resource ID from the request URL
      const resourceId = webSocket.upgradeReq.url.match(/\/subscriptions\/([^/]+)/)[1];

      // Add the resourceId to the `context` for later use
      context.resourceId = resourceId;
    },
  },
});

// Create an Express application
const app = express();
server.applyMiddleware({ app });

// Create a WebSocket server and integrate with Apollo Server
const httpServer = createServer(app);
const wsServer = new ws.Server({ server: httpServer });
httpServer.listen({ port: 5000 }, () => {
  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`);
  console.log(`🚀 Subscriptions ready at ws://localhost:4000${server.subscriptionsPath}`);
});

// Handle WebSocket connections
wsServer.on('connection', (socket, request) => {
  const connectionParams = {
    headers: request.headers,
  };

  // Create a subscription server
  server.createSubscriptionServer(socket, connectionParams);
});