const db = require("../../../models");

const updatePostResolver = async (_, { post_id, post }) => {
  const targetPost = await db.Post.findByPk(post_id);

  if (!targetPost) {
    return null;
  }

  const postOwner = await db.User.findByPk(targetPost.user_id);
  if (postOwner.user_id !== parseInt(post.user_id)) {
    throw new Error(`Mismatch between the actual id of the post and the provided post.user_id!`);
  }

  const updatedPost = await targetPost.update({
    ...post,
  });

  return updatedPost;
};

module.exports = updatePostResolver;
