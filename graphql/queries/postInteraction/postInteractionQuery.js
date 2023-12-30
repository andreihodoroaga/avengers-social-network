const { GraphQLNonNull, GraphQLID } = require("graphql");
const db = require("../../../models");
const postInteractionType = require("../../types/postInteraction/postInteractionType");

const postInteractionQuery = {
  type: postInteractionType,
  args: {
    post_id: {
      type: new GraphQLNonNull(GraphQLID),
    },
  },
  resolve: (_, { post_interaction_id }) => db.UserPostInteraction.findByPk(post_interaction_id),
};

module.exports = postInteractionQuery;
