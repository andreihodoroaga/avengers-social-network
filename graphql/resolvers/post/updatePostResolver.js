const db = require("../../../models");

const updatePostResolver = async (_, { id }, user) => {
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

  const updatedPost = await targetPost.update({
    ...post,
  });

  return updatedPost;
};

module.exports = updatePostResolver;
