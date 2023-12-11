const { GraphQLList } = require("graphql");
const userType = require("../types/userType");
const db = require("../../models");

const usersQuery = {
  type: new GraphQLList(userType),
  resolve: () => db.User.findAll(),
};

module.exports = usersQuery;
