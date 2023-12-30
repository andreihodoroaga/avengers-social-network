const { GraphQLNonNull, GraphQLID } = require("graphql");
const db = require("../../../models");
const postType = require("../../types/postType");

const postQuery = {
  type: postType,
  args: {
    post_id: {
      type: new GraphQLNonNull(GraphQLID),
    },
  },
  resolve: (_, { post_id }) => db.Post.findByPk(post_id),
};

module.exports = postQuery;
