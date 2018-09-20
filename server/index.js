const mongoose = require('mongoose');
const { DATABASE_URL } = require('./config');
const { GraphQLServer } = require('graphql-yoga');
const User = require('./models/user');
const Advice = require('./models/advice');
const Query = require('./queries');
const typeDefs='./schema.graphql';

const resolvers = {
  Query,
  Mutation: {
    post: async (root, args) => {
      return await User.create({
        username: args.username,
        password: args.password
      })
    },
    postAdvice: async (root, args) => {
      return await Advice.create({
        customAdvice: args.customAdvice
      })
    }
  }
}

const server = new GraphQLServer({
  typeDefs,
  resolvers
});

if (require.main === module) {
  mongoose.connect(DATABASE_URL);
  server.start(() => console.log(`Server is running`));
}
