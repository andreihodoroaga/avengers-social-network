const postType = require("../../types/postType");
const postInputType = require("../../types/postInputType");
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
