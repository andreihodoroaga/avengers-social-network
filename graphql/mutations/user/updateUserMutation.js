const updateUserResolver = require("../../resolvers/user/updateUserResolver");
const { GraphQLNonNull, GraphQLID } = require("graphql");
const userType = require("../../types/user/userType");
const userInputType = require("../../types/user/userInputType");

const updateUserMutation = {
  type: userType,

  args: {
    user_id: {
      type: new GraphQLNonNull(GraphQLID),
    },
    user: {
      type: userInputType,
    },
  },
  resolve: updateUserResolver,
};

module.exports = updateUserMutation;
