const { GraphQLList } = require("graphql");
const userType = require("../../types/user/userType");
const getUsersResolver = require("../../resolvers/user/getUsersResolver");

const usersQuery = {
  type: new GraphQLList(userType),
  resolve: getUsersResolver,
};

module.exports = usersQuery;
