const { GraphQLNonNull, GraphQLID, GraphQLBoolean } = require("graphql");
const deleteUserImageResolver = require("../../resolvers/userImage/deleteUserImageResolver");

const deleteUserImageMutation = {
  type: GraphQLBoolean,

  args: { },
  resolve: deleteUserImageResolver,
};

module.exports = deleteUserImageMutation;
