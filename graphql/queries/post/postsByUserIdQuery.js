const { GraphQLNonNull, GraphQLID, GraphQLList } = require("graphql");
const db = require("../../../models");
const postType = require("../../types/post/postType");

const postsByUserIdQuery = {
  type: new GraphQLList(postType),
  args: {
    user_id: {
      type: new GraphQLNonNull(GraphQLID),
    },
  },
  resolve: (_, { user_id }) => db.Post.findAll({
    where: {
      user_id: parseInt(user_id)
    }
  }),
};

module.exports = postsByUserIdQuery;
