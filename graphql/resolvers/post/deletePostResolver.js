const db = require("../../../models");

const deletePostResolver = async (_, { post_id }, user) => {
  if (!user) {
    throw new Error("Unauthorized");
  }
  const targetPost = await db.Post.findByPk(post_id);

  if (!targetPost) {
    return null;
  }

  if (user.user_id !== targetPost.user_id) {
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
