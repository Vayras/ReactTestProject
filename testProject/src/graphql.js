// graphql.js
import { gql } from '@apollo/client';

export const GET_CLIENTS = gql`
  query GetClients {
    clients {
      _id
      name
      email
      number
      source
      status
      notes
    }
  }
`;

export const CREATE_CLIENT = gql`
  mutation CreateClient(
    $name: String!
    $number: String!
    $email: String!
    $notes: String!
    $status: String!
    $source: String!
  ) {
    createClient(input:{
      name: $name
      number: $number
      email: $email
      notes: $notes
      status: $status
      source: $source
    }) {
        _id
        name
        email
        number
        source
        status
        notes
    }
  }
`;

export const UPDATE_CLIENT = gql`
  mutation UpdateClient{
    updateClient(_id:$_id , input: {
      name: $name
      number: $number
      email: $email
      notes: $notes
      status: $status
      source: $source
    }) {
        _id
        name
        email
        number
        source
        status
        notes
    }
  }
`;

export const DELETE_CLIENT = gql`
  mutation DeleteClient($_id: ID!) {
    deleteClient(_id: $_id) {
      _id
      name
      email
      number
      source
      status
      notes
    }
  }
`;