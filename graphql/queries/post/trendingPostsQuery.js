const { GraphQLList } = require("graphql");
const postType = require("../../types/post/postType");
const trendingsPostsResolver = require("../../resolvers/post/trendingPostsResolver");

const trendingPostsQuery = {
  type: new GraphQLList(postType),
  resolve: trendingsPostsResolver,
};

module.exports = trendingPostsQuery;
