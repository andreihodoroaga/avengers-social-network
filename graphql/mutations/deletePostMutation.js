const deletePostResolver = require("../resolvers/deletePostResolver");
const { GraphQLNonNull, GraphQLID, GraphQLBoolean } = require("graphql");

const deletePostMutation = {
  type: GraphQLBoolean,

  args: {
    post_id: {
      type: new GraphQLNonNull(GraphQLID),
    },
  },
  resolve: deletePostResolver,
};

module.exports = deletePostMutation;
