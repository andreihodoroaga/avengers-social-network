const { GraphQLList } = require("graphql");
const postType = require("../types/postType");
const db = require("../../db");

const postsQuery = {
  type: new GraphQLList(postType),
  resolve: () => db.posts,
};

module.exports = postsQuery;
