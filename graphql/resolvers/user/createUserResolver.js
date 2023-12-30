const db = require("../../../models");

const createUserResolver = async (_, { user }) => {
  const newUser = await db.User.create(user);

  return newUser;
};

module.exports = createUserResolver;
