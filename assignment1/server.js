const express = require('express')
const { ApolloServer, gql } = require('apollo-server-express')
const mongoose = require('mongoose')

const { MONGODB } = require('./config')

const typeDefs = gql`
  type Query {
    hello: String,
    user: User
  }
`;

const resolvers = {
  Query: {
    hello: () => 'Hello world!',
    getAllEmployees: () => {
      // get employees
    },
    login: () => {
      // login and set jwt
    },
    getEmployeeById: () => {
      // get employee by id
    },
    getEmployeeByName: () => {
      // get employee by name
    },
  },

  Mutation: {
    signUp: () => {
      // sign up
    },
    addEmployee: () => {
      // add employee
    },
    updateEmployee: () => {
      // update employee
    },
    deleteEmployee: () => {
      // delete employee
    },
  },
};

const main = async () => {
  const server = new ApolloServer({ typeDefs, resolvers });

  const app = express();
  await server.start();
  server.applyMiddleware({ app });

  app.listen({ port: 4000 }, () => {
    console.log(`Server ready at http://localhost:4000${server.graphqlPath}`)
  });
}

main()
