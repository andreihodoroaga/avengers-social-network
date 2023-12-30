const { GraphQLNonNull, GraphQLID, GraphQLBoolean } = require("graphql");
const deleteUserImageResolver = require("../../resolvers/userImage/deleteUserImageResolver");

const deleteUserImageMutation = {
  type: GraphQLBoolean,

  args: {
    user_id: {
      type: new GraphQLNonNull(GraphQLID),
    },
  },
  resolve: deleteUserImageResolver,
};

module.exports = deleteUserImageMutation;
