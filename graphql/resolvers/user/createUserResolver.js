const db = require("../../../models");

const createUserResolver = async (_, { user }) => {
  const newUser = await db.User.create({
    ...user,
    profile_picture: null
  });

  return newUser;
};

module.exports = createUserResolver;
