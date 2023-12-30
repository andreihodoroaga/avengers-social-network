const { GraphQLList } = require("graphql");
const userType = require("../../types/user/userType");
const db = require("../../../models");

const usersQuery = {
  type: new GraphQLList(userType),
  resolve: () => db.User.findAll(),
};

module.exports = usersQuery;
