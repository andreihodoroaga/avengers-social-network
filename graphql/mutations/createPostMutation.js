const postType = require("../types/postType");
const createPostResolver = require("../resolvers/createPostResolver");

const { parent_post_id, text } = postType.getFields();

const createPostMutation = {
  type: postType,
  // post_id and timestamp are added by the DB
  args: {
    parent_post_id,
    text,
  },
  resolve: createPostResolver,
};

module.exports = createPostMutation;
