const { ApolloServer } = require('apollo-server-express');
require('./config/db');
const { typeDefs, resolvers } = require('./schemas/index');
const { authMiddleware } = require('./utils/auth');
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001;


const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: authMiddleware, // all resolvers can get access in contex
});

(async () => {
  await server.start();
  server.applyMiddleware({ app });
  app.listen(PORT, () => {
    console.log(`Server is Running on ${PORT}`);
  });
})();
