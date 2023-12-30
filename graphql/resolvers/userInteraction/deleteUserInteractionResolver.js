const db = require("../../../models");

const deleteUserInteractionResolver = async (_, { user_interaction_id }) => {
  const targetUserInteraction = await db.UserInteraction.findByPk(user_interaction_id);

  if (!targetUserInteraction) {
    return null;
  }

  try {
    await targetUserInteraction.destroy();

    return true;
  } catch (e) {
    throw new Error(e);
  }
};

module.exports = deleteUserInteractionResolver;
