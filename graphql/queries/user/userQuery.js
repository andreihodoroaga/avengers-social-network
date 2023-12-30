const { GraphQLNonNull, GraphQLID } = require("graphql");
const db = require("../../../models");
const userType = require("../../types/user/userType");

const userQuery = {
  type: userType,
  args: {
    user_id: {
      type: new GraphQLNonNull(GraphQLID),
    },
  },
  resolve: (_, { user_id }) => db.User.findByPk(user_id),
};

module.exports = userQuery;
