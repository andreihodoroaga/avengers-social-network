const db = require("../../../models");

const updateUserResolver = async (_, { user_id, userNew }, user) => {
  if (!user || user_id !== user.user_id) {
    throw new Error("Unauthorized");
  }

  const targetUser = await db.User.findByPk(user_id);

  if (!targetUser) {
    return null;
  }

  const updatedUser = await targetUser.update({
    ...userNew,
  });

  return updatedUser;
};

module.exports = updateUserResolver;
