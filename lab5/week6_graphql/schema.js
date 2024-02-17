const { gql } = require('apollo-server-express')
const typeDefs = gql`
  type Query {
    hello: String
    students: [Student]
  }
  type Student {
    _id: ID!
    firstname: String
    lastname: String
    email: String
  }
  type Mutation {
    createStudent(firstname: String!, lastname: String!, email: String!): Student
    createNewStudent(input: StudentInput): Student
  }
  input StudentInput {
    firstname: String,
    lastname: String,
    email: String
  }

`

module.exports = typeDefs;
