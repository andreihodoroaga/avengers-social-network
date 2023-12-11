const { GraphQLObjectType } = require("graphql");
const postsQuery = require("./queries/postsQuery");
const usersQuery = require("./queries/usersQuery");
const userQuery = require("./queries/userQuery");

const queryType = new GraphQLObjectType({
  name: "Query",
  fields: {
    posts: postsQuery,
    users: usersQuery,
    user: userQuery,
  },
});

module.exports = queryType;
