const { AuthenticationError } = require("apollo-server-express");
const { User, Comment } = require("../model");
const { signToken } = require("../utils/auth");

const resolvers = {
  Query: {
    me: async (parent, args, context) => {
      if (context.user) {
        const userData = await User.findOne({ _id: context.user._id })
          .select("-__v -password")
          .populate("comments");

        return userData;
      }
      throw new AuthenticationError("Not logged in");
    },
    users: async () => {
      return User.find().select("-__v -password").populate("comments");
    },
    user: async (parent, { username }) => {
      return User.findOne({ username })
        .select("-__v -password")
    },
    comment: async (parent, { _id }) => {
      return Comment.findOne({ _id });
    },
    comments: async () => {
      return Comment.find().select("-__v")
    }
  },

  Mutation: {
    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);

      return { token, user };
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });
      if (!user) {
        throw new AuthenticationError("Invalid credentials");
      }

      const validPw = await user.isCorrectPassword(password);

      if (!validPw) {
        throw new AuthenticationError("Invalid credentials");
      }

      const token = signToken(user);
      return { token, user };
    },
    addComment: async (parent, args, context) => {
      if (context.user) {
        const thought = await Comment.create({
          ...args,
          username: context.user.username,
        });

        await User.findByIdAndUpdate(
          { _id: context.user._id },
          { $push: { comments: comment._id } },
          { new: true }
        );

        return comment;
      }

      throw new AuthenticationError(
        "You need to be logged in to view this information"
      );
    },
  },
};
  module.exports = resolvers; 