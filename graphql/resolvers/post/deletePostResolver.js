const db = require("../../../models");

const deletePostResolver = async (_, { id }, user) => {
  if (!user) {
    throw new Error("Unauthorized");
  }
  const targetPost = await db.Post.findByPk(id);

  if (!targetPost) {
    return null;
  }

  if (user.id !== targetPost.user_id) {
    throw new Error("Unauthorized");
  }

  try {
    await targetPost.destroy();

    return true;
  } catch (e) {
    throw new Error(e);
  }
};

module.exports = deletePostResolver;
