// server.js
const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const typeDefs = require('./schema');
const resolvers = require('./resolver');
const sequelize = require('./connector');
 
const { makeExecutableSchema } = require('@graphql-tools/schema');
 
const app = express();

const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
});

app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true,
}));

sequelize.sync().then(() => {
  app.listen(4000, () => {
    console.log('Server is running on http://localhost:4000/graphql');
  });
}).catch(error => {
  console.error('Unable to start server:', error);
});
