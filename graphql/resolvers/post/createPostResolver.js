const db = require("../../../models");

const createPostResolver = async (_, { post }) => {
  const user = await db.User.findByPk(post.user_id);
  if (!user) {
    throw new Error(`User with user_id ${post.user_id} does not exist!`);
  }

  const newPost = await db.Post.create(post);

  return newPost;
};

module.exports = createPostResolver;