const { gql } = require('apollo-server-express');

const typeDefs = gql`

  type User {
    _id: ID!,
    username: String!,
    email: String!,
    password: String,
  },

  type Error {
    message: String!,
  }

  enum Gender {male, female, other},

  type Employee {
    _id: ID,
    firstName: String!,
    lastName: String!,
    email: String!,
    gender: Gender!,
    salary: Float!,
  },

  type Query {
    getAllEmployees: [Employee!],
    login(username: String!, password: String!): String!,
    getEmployeeById(id: ID!): Employee,
  },

  type Mutation {
    signUp(username: String!, email: String!, password: String!): String!,
    addEmployee(firstName: String!, lastName: String!, email: String!, gender: Gender!, salary: Float!): Employee!,
    updateEmployee(id: ID!, username: String!, password: String!): Boolean!,
    deleteEmployee(id: ID!): Boolean!,
  },

`;

module.exports = typeDefs;
