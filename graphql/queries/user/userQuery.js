const { GraphQLNonNull, GraphQLID } = require("graphql");
const userType = require("../../types/user/userType");
const getUserResolver = require("../../resolvers/user/getUserResolver");

const userQuery = {
  type: userType,
  args: {
    id: {
      type: new GraphQLNonNull(GraphQLID),
    },
  },
  resolve: getUserResolver,
};

module.exports = userQuery;
