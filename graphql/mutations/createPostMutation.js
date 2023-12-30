const createPostResolver = require("../resolvers/createPostResolver");
const postInputType = require("../types/postInputType");
const postType = require("../types/postType");

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
