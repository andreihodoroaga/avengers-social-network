const db = require("../../../models");

const createPostResolver = async (_, { post }, user) => {
  if (!user) {
    throw new Error("Unauthorized");
  }

  post.user_id = user.id;
  const newPost = await db.Post.create(post);

  return newPost;
};

module.exports = createPostResolver;