// graphql/resolvers.js
const Client = require('../models/client');

const resolvers = {
  Query: {
    clients: async () => {
      return await Client.find();
    },
    client: async (_, { _id }) => {
      return await Client.findById(_id);
    },
  },
  Mutation: {
    createClient: async (_, { input }) => {
      const client = new Client(input);
      await client.save();
      return client;
    },
    updateClient: async (_, { _id, input }) => {
      return await Client.findByIdAndUpdate(_id, input, { new: true });
    },
    deleteClient: async (_, { _id }) => {
      return await Client.findByIdAndRemove(_id);
    },
  },
};

module.exports = resolvers;
