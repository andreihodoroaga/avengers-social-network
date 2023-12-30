const updatePostResolver = require("../resolvers/updatePostResolver");
const { GraphQLNonNull, GraphQLID } = require("graphql");
const postType = require("../types/postType");
const postInputType = require("../types/postInputType");

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
