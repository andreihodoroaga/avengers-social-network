const db = require("../../../models");

const updatePostResolver = async (_, { post_id }, user) => {
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

  const updatedPost = await targetPost.update({
    ...post,
  });

  return updatedPost;
};

module.exports = updatePostResolver;
