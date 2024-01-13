const deleteUserInteractionResolver = require("../../resolvers/userInteraction/deleteUserInteractionResolver");
const { GraphQLNonNull, GraphQLID, GraphQLBoolean } = require("graphql");

const deleteUserInteractionMutation = {
  type: GraphQLBoolean,

  args: {
    id: {
      type: new GraphQLNonNull(GraphQLID),
    },
  },
  resolve: deleteUserInteractionResolver,
};

module.exports = deleteUserInteractionMutation;
