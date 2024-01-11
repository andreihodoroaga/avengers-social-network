const db = require("../../../models");

const deletePostInteractionResolver = async (_, { post_interaction_id }, user) => {
  if (!user) {
    throw new Error("Unauthorized");
  }

  const targetPostInteraction = await db.UserPostInteraction.findByPk(post_interaction_id);

  if (!targetPostInteraction) {
    return null;
  }

  if (user.user_id !== targetPostInteraction.user_id) {
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
