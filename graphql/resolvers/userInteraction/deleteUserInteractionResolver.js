const db = require("../../../models");

const deleteUserInteractionResolver = async (_, { id }, user) => {
  if (!user) {
    throw new Error("Unauthorized");
  }

  const targetUserInteraction = await db.UserInteraction.findByPk(id);

  if (!targetUserInteraction) {
    return null;
  }

  if (user.id !== targetUserInteraction.user_id_initiator) {
    throw new Error("Unauthorized");
  }

  try {
    await targetUserInteraction.destroy();

    return true;
  } catch (e) {
    throw new Error(e);
  }
};

module.exports = deleteUserInteractionResolver;
