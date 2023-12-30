const { GraphQLNonNull, GraphQLID } = require("graphql");
const userType = require("../../types/user/userType");
const findResolver = require("../../resolvers/findResolver");

const userQuery = {
  type: userType,
  args: {
    user_id: {
      type: new GraphQLNonNull(GraphQLID),
    },
  },
  resolve: findResolver('User'),
};

module.exports = userQuery;
