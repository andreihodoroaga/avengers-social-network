const deleteUserResolver = require("../resolvers/deleteUserResolver");
const { GraphQLNonNull, GraphQLID, GraphQLBoolean } = require("graphql");

const deleteUserMutation = {
  type: GraphQLBoolean,

  args: {
    user_id: {
      type: new GraphQLNonNull(GraphQLID),
    },
  },
  resolve: deleteUserResolver,
};

module.exports = deleteUserMutation;
