const { GraphQLList } = require("graphql");
const postType = require("../../types/postType");
const db = require("../../../models");

const postsQuery = {
  type: new GraphQLList(postType),
  resolve: () => db.Post.findAll(),
};

module.exports = postsQuery;
