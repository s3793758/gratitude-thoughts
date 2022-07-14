const { ApolloServer } = require('apollo-server-express');
const { typeDefs, resolvers } = require('./schemas/index');
require('./db');
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001;

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

(async () => {
  await server.start();
  server.applyMiddleware({ app });
  app.listen(PORT, () => {
    console.log(`Server is Running on ${PORT}`);
  });
})();
