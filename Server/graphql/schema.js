// graphql/schema.js
const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Client {
    _id: ID!
    name: String!
    number: String!
    source: String
    status: String
    email: String
    notes: String
  }

  type Query {
    clients: [Client]
    client(_id: ID!): Client
  }

  type Mutation {
    createClient(input: ClientInput): Client
    updateClient(_id: ID!, input: ClientInput): Client
    deleteClient(_id: ID!): Client
  }

  input ClientInput {
    name: String!
    number: String!
    source: String
    status: String
    email: String
    notes: String
  }
`;

module.exports = typeDefs;
