// schema.js
const { gql } = require('graphql-tag');

const typeDefs = gql`
  type User {
    id: ID!
    name: String!
    email: String!
  }

  type Query {
    getUser(id: ID!): User
    getUsers: [User]
  }

  type Mutation {
    createUser(name: String!, email: String!): User
    deleteUser(id: ID!): Boolean
  }
`;

module.exports = typeDefs;
