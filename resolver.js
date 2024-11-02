// resolver.js
const { User } = require('./models/User'); // Assuming you've defined a User model

const resolvers = {
  Query: {
    getUser: async (_, { id }) => {
      return await User.findByPk(id);
    },
    getUsers: async () => {
      return await User.findAll();
    },
  },
  Mutation: {
    createUser: async (_, { name, email }) => {
      return await User.create({ name, email });
    },
    deleteUser: async (_, { id }) => {
      const user = await User.findByPk(id);
      if (!user) return false;
      await user.destroy();
      return true;
    },
  },
};

module.exports = resolvers;
