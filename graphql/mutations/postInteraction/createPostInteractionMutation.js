const createPostInteractionResolver = require("../../resolvers/postInteraction/createPostInteractionResolver");
const postInteractionInputType = require("../../types/postInteraction/postInteractionInputType");
const postInteractionType = require("../../types/postInteraction/postInteractionType");

const createPostInteractionMutation = {
  type: postInteractionType,

  args: {
    postInteraction: {
      type: postInteractionInputType,
    },
  },
  resolve: createPostInteractionResolver,
};

module.exports = createPostInteractionMutation;
