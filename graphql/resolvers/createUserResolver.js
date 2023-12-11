const db = require("../../models");

const createUserResolver = async (_, { user }) => {
  const newUser = await db.User.create({
    ...user,
    createdAt: new Date(),
    updatedAt: new Date(),
  });

  return newUser;
};

module.exports = createUserResolver;
