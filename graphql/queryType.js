const { GraphQLObjectType } = require("graphql");
const postQuery = require("./queries/post/postQuery");
const postsQuery = require("./queries/post/postsQuery");
const usersQuery = require("./queries/user/usersQuery");
const userQuery = require("./queries/user/userQuery");

const userInteractionQuery = require("./queries/userInteraction/userInteractionQuery");
const userInteractionsQuery = require("./queries/userInteraction/userInteractionsQuery");

const queryType = new GraphQLObjectType({
  name: "Query",
  fields: {
    users: usersQuery,
    user: userQuery,
    post: postQuery,
    posts: postsQuery,
    userInteraction: userInteractionQuery,
    userInteractions: userInteractionsQuery,
  },
});

module.exports = queryType;
