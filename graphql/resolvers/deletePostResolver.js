const db = require("../../models");

const deletePostResolver = async (_, { post_id }) => {
  const targetPost = await db.Post.findByPk(post_id);
  
  if (!targetPost) {
    return null;
  }

  try {
    await targetPost.destroy();

    return true;
  } catch (e) {
    throw new Error(e);
  }
};

module.exports = deletePostResolver;
