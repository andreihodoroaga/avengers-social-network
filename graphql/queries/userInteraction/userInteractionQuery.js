const { GraphQLNonNull, GraphQLID } = require("graphql");
const db = require("../../../models");
const userInteractionType = require("../../types/userInteraction/userInteractionType");

const userInteractionQuery = {
  type: userInteractionType,
  args: {
    user_id: {
      type: new GraphQLNonNull(GraphQLID),
    },
  },
  resolve: (_, { user_interaction_id }) => db.User.findByPk(user_interaction_id),
};

module.exports = userInteractionQuery;
