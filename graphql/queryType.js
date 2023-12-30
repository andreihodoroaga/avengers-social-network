const { GraphQLObjectType } = require("graphql");
const usersQuery = require("./queries/usersQuery");
const userQuery = require("./queries/userQuery");
const postQuery = require("./queries/postQuery");
const postsQuery = require("./queries/postsQuery");

const queryType = new GraphQLObjectType({
  name: "Query",
  fields: {
    users: usersQuery,
    user: userQuery,
    post: postQuery,
    posts: postsQuery,
  },
});

module.exports = queryType;
