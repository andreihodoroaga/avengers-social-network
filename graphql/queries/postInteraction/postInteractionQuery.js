const { GraphQLNonNull, GraphQLID } = require("graphql");
const db = require("../../../models");
const postInteractionType = require("../../types/postInteraction/postInteractionType");

const postInteractionQuery = {
  type: postInteractionType,
  args: {
    id: {
      type: new GraphQLNonNull(GraphQLID),
    },
  },
  resolve: (_, { id }) => db.UserPostInteraction.findByPk(id),
};

module.exports = postInteractionQuery;
