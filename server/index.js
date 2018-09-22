const mongoose = require('mongoose');
const { DATABASE_URL } = require('./config');
const { GraphQLServer } = require('graphql-yoga');
const UserModel = require('./models/user');
const AdviceModel = require('./models/advice');
const Query = require('./queries');
const Mutation = require('./mutations');
const User = require('./resolvers/user');
const Advice = require('./resolvers/advice');
const typeDefs='./schema.graphql';

const resolvers = {
  Query,
  Mutation,
  User,
  Advice
}

const server = new GraphQLServer({
  typeDefs,
  resolvers,
  context: incomingData => ({
    incomingData,
    adviceModel: AdviceModel,
    userModel: UserModel
  })
});

if (require.main === module) {
  mongoose.connect(DATABASE_URL);
  server.start(() => console.log(`Server is running`));
}
