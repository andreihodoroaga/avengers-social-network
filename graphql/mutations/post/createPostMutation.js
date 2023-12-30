const postType = require("../../types/post/postType");
const postInputType = require("../../types/post/postInputType");
const createPostResolver = require("../../resolvers/post/createPostResolver");

const { parent_post_id, text } = postType.getFields();

const createPostMutation = {
  type: postType,

  args: {
    post: {
      type: postInputType,
    },
  },
  resolve: createPostResolver,
};

module.exports = createPostMutation;
