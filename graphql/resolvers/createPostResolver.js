const db = require("../../models");

const createPostResolver = (_, args) => {
  // const newPost = {
  //   ...args,
  //   post_id: db.posts.length + 1,
  //   timestamp: new Date(),
  // };
  // db.posts.push(newPost);
  // return newPost;
};

module.exports = createPostResolver;
