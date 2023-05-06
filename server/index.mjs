import { createRequire } from "module";
const require = createRequire(import.meta.url)
require('dotenv').config()
import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
const { sequelize } = require('./models')
const resolvers =  require("./resolvers");
const typeDefs = require('./schema/typeDefs')
// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
const server = new ApolloServer({
  typeDefs,
  resolvers,
});

// Passing an ApolloServer instance to the `startStandaloneServer` function:
//  1. creates an Express app
//  2. installs your ApolloServer instance as middleware
//  3. prepares your app to handle incoming requests
const { url } = await startStandaloneServer(server, {
  listen: { port: 4000 },
});

sequelize.authenticate()
.then(() => console.log("database connected!"))
.catch(err => console.log(err))

console.log(`🚀  Server ready at: ${url}`);