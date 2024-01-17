const deleteUserResolver = require("../../resolvers/user/deleteUserResolver");
const { GraphQLNonNull, GraphQLID, GraphQLBoolean } = require("graphql");

const deleteUserMutation = {
  type: GraphQLBoolean,

  args: {
    id: {
      type: new GraphQLNonNull(GraphQLID),
    },
  },
  resolve: deleteUserResolver,
};

module.exports = deleteUserMutation;
