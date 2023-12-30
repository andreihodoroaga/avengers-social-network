const updatePostResolver = require("../../resolvers/post/updatePostResolver");
const { GraphQLNonNull, GraphQLID } = require("graphql");
const postType = require("../../types/post/postType");
const postInputType = require("../../types/post/postInputType");

const updatePostMutation = {
  type: postType,

  args: {
    post_id: {
      type: new GraphQLNonNull(GraphQLID),
    },
    post: {
      type: postInputType,
    },
  },
  resolve: updatePostResolver,
};

module.exports = updatePostMutation;
