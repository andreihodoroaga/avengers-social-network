const db = require("../../../models");

const updateUserResolver = async (_, { id, userNew }, user) => {
  if (!user || id !== user.id) {
    throw new Error("Unauthorized");
  }

  const targetUser = await db.User.findByPk(id);

  if (!targetUser) {
    return null;
  }

  const updatedUser = await targetUser.update({
    ...userNew,
  });

  return updatedUser;
};

module.exports = updateUserResolver;
