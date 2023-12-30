const userImageType = require("../../types/userImage/userImageType");
const userImageInputType = require("../../types/userImage/userImageInputType");
const createUserImageResolver = require("../../resolvers/userImage/createUserImageResolver");

const createUserImageMutation = {
  type: userImageType,

  args: {
    userImage: {
      type: userImageInputType,
    },
  },
  resolve: createUserImageResolver,
};

module.exports = createUserImageMutation;
