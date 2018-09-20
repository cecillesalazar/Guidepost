const mongoose = require('mongoose');
const { DATABASE_URL } = require('./config');
const { GraphQLServer } = require('graphql-yoga');
const User = require('./models/user');
const Advice = require('./models/advice');
const Query = require('./queries');
const typeDefs='./schema.graphql';

const resolvers = {
  Query,
  Mutation,
  User
}

const server = new GraphQLServer({
  typeDefs,
  resolvers
});

if (require.main === module) {
  mongoose.connect(DATABASE_URL);
  server.start(() => console.log(`Server is running`));
}
