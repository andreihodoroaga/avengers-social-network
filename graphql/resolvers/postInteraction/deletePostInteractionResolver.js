const db = require("../../../models");

const deletePostInteractionResolver = async (_, { post_interaction_id }) => {
  const targetPostInteraction = await db.UserPostInteraction.findByPk(post_interaction_id);

  if (!targetPostInteraction) {
    return null;
  }

  try {
    await targetPostInteraction.destroy();

    return true;
  } catch (e) {
    throw new Error(e);
  }
};

module.exports = deletePostInteractionResolver;
