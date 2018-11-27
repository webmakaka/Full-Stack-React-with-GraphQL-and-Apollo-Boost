const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

require('dotenv').config({
  path: 'variables.env'
});

const Recipe = require('./models/Recipe');
const User = require('./models/User');

const { graphiqlExpress, graphqlExpress } = require('apollo-server-express');
const { makeExecutableSchema } = require('graphql-tools');

const { typeDefs } = require('./schema');
const { resolvers } = require('./resolvers');

const schema = makeExecutableSchema({
  typeDefs,
  resolvers
});

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log('DB connected');
  })
  .catch(err => console.log(err));

const app = express();

app.use('/graphiql', graphiqlExpress({ endpointURL: '/graphql' }));

app.use('/graphql', bodyParser.json(), graphqlExpress({
  schema,
  context: {
    Recipe,
    User
  }
}));

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server listening on PORT ${PORT}`);
});
