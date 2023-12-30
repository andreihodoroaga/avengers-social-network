const db = require("../../../models");

const deleteUserResolver = async (_, { user_id }) => {
  const targetUser = await db.User.findByPk(user_id);

  if (!targetUser) {
    return null;
  }

  try {
    await targetUser.destroy();

    return true;
  } catch (e) {
    throw new Error(e);
  }
};

module.exports = deleteUserResolver;
