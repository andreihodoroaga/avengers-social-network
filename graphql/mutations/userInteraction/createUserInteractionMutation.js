const createUserInteractionResolver = require("../../resolvers/userInteraction/createUserInteractionResolver");
const userInteractionInputType = require("../../types/userInteraction/userInteractionInputType");
const userInteractionType = require("../../types/userInteraction/userInteractionType");

const createUserInteractionMutation = {
  type: userInteractionType,

  args: {
    userInteraction: {
      type: userInteractionInputType,
    },
  },
  resolve: createUserInteractionResolver,
};

module.exports = createUserInteractionMutation;
