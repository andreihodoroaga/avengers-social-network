const deletePostInteractionResolver = require("../../resolvers/postInteraction/deletePostInteractionResolver");
const { GraphQLNonNull, GraphQLID, GraphQLBoolean } = require("graphql");

const deletePostInteractionMutation = {
  type: GraphQLBoolean,

  args: {
    post_interaction_id: {
      type: new GraphQLNonNull(GraphQLID),
    },
  },
  resolve: deletePostInteractionResolver,
};

module.exports = deletePostInteractionMutation;
