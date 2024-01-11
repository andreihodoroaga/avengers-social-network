const db = require("../../../models");

const deleteUserResolver = async (_, { user_id }, user) => {
  if (!user) {
    throw new Error("Unauthorized");
  }

  const targetUser = await db.User.findByPk(user_id);

  if (!targetUser) {
    return null;
  }

  if (user.user_id !== targetUser.user_id) {
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
