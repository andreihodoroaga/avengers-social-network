const createUserResolver = require("../resolvers/createUserResolver");
const userInputType = require("../types/userInputType");
const userType = require("../types/userType");

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
