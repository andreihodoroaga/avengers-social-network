const { GraphQLNonNull, GraphQLID } = require("graphql");
const postType = require("../../types/post/postType");
const findResolver = require("../../resolvers/findResolver");

const postQuery = {
  type: postType,
  args: {
    post_id: {
      type: new GraphQLNonNull(GraphQLID),
    },
  },
  resolve: findResolver('Post'),
};

module.exports = postQuery;
