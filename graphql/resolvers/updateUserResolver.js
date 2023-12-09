const db = require("../../models");

const updateUserResolver = async (_, { user_id, user }) => {
  const targetUser = await db.User.findByPk(user_id);

  if (!targetUser) {
    return null;
  }

  const updatedUser = await targetUser.update({
    ...user,
  });

  return updatedUser;
};

module.exports = updateUserResolver;
