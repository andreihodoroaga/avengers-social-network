const deletePostResolver = require("../../resolvers/post/deletePostResolver");
const { GraphQLNonNull, GraphQLID, GraphQLBoolean } = require("graphql");

const deletePostMutation = {
  type: GraphQLBoolean,

  args: {
    id: {
      type: new GraphQLNonNull(GraphQLID),
    },
  },
  resolve: deletePostResolver,
};

module.exports = deletePostMutation;
