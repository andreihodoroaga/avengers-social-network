const deletePostInteractionResolver = require("../../resolvers/postInteraction/deletePostInteractionResolver");
const { GraphQLNonNull, GraphQLID, GraphQLBoolean } = require("graphql");

const deletePostInteractionMutation = {
  type: GraphQLBoolean,

  args: {
    id: {
      type: new GraphQLNonNull(GraphQLID),
    },
  },
  resolve: deletePostInteractionResolver,
};

module.exports = deletePostInteractionMutation;
