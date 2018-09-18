const mongoose = require('mongoose');
const { DATABASE_URL } = require('./config');
const { GraphQLServer } = require('graphql-yoga');
const Post = require('./models/post');
const Query = require('./queries');
const typeDefs='./schema.graphql';

const resolvers = {
  // Query,
  Mutation: {
    post: async (root, args) => {
      return await Post.create({
        post: args.post
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
