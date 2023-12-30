const createUserResolver = require("../../resolvers/user/createUserResolver");
const userInputType = require("../../types/user/userInputType");
const userType = require("../../types/user/userType");

const createUserMutation = {
  type: userType,

  args: {
    user: {
      type: userInputType,
    },
  },
  resolve: createUserResolver,
};

module.exports = createUserMutation;
