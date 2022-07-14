const { ApolloServer } = require('apollo-server-express');
const express = require('express');

const server = new ApolloServer({
  typeDefs,
  resolvers,
});
