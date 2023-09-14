// server.js
const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const mongoose = require('mongoose');
const typeDefs = require('./graphql/schema');
const resolvers = require('./graphql/resolvers');

const app = express();

const startServer = async () => {
  const server = new ApolloServer({ typeDefs, resolvers });

  // Start the Apollo Server before applying middleware
  await server.start();

  server.applyMiddleware({ app });

  // Connect to MongoDB
  await mongoose.connect('mongodb://localhost:27017/client_management', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  const PORT = process.env.PORT || 4000;

  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}/graphql`);
  });
};

startServer().catch((err) => {
  console.error('Error starting the server:', err);
});
