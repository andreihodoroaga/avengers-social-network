const db = require("../../../models");

const deleteUserResolver = async (_, { id }, user) => {
  if (!user) {
    throw new Error("Unauthorized");
  }

  const targetUser = await db.User.findByPk(id);

  if (!targetUser) {
    return null;
  }

  if (user.id !== targetUser.id) {
    throw new Error("Unauthorized");
  }

  try {
    await targetUser.destroy();

    return true;
  } catch (e) {
    throw new Error(e);
  }
};

module.exports = deleteUserResolver;
