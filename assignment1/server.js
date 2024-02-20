const express = require('express')
const { ApolloServer } = require('apollo-server-express')
const mongoose = require('mongoose')
const { ApolloServerPluginInlineTrace } = require("apollo-server-core");

const typeDefs = require('./typeDefs')
const resolvers = require('./resolvers')

const Db = require('./config')

const mongodb_atlas_url = `mongodb+srv://${Db.DB_USER}:${Db.DB_USER_PASSWORD}@${Db.DB_CLUSTER}/${Db.DB_NAME}?retryWrites=true&w=majority`;

const main = async () => {
  mongoose.connect(mongodb_atlas_url, {
  }).then(() => {
    console.log('Success Mongodb connection')
  }).catch((err) => {
    console.log(`Error Mongodb connection ${err}`)
  })


  const server = new ApolloServer({ typeDefs, resolvers, plugins: [ApolloServerPluginInlineTrace] });

  const app = express();
  await server.start();
  server.applyMiddleware({ app });

  app.listen({ port: 4000 }, () => {
    console.log(`Server ready at http://localhost:4000${server.graphqlPath}`)
  });
}

main()
