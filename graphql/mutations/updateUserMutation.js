const updateUserResolver = require("../resolvers/updateUserResolver");
const { GraphQLNonNull, GraphQLID } = require("graphql");
const userType = require("../types/userType");
const userInputType = require("../types/userInputType");

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
