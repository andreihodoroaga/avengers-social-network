const db = require("../../../models");

const deletePostInteractionResolver = async (_, { id }, user) => {
  if (!user) {
    throw new Error("Unauthorized");
  }

  const targetPostInteraction = await db.UserPostInteraction.findByPk(id);

  if (!targetPostInteraction) {
    return null;
  }

  if (user.id !== targetPostInteraction.user_id) {
    throw new Error("Unauthorized");
  }

  try {
    await targetPostInteraction.destroy();

    return true;
  } catch (e) {
    throw new Error(e);
  }
};

module.exports = deletePostInteractionResolver;
