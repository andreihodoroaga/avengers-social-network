const { GraphQLNonNull, GraphQLID } = require("graphql");
const userInteractionType = require("../../types/userInteraction/userInteractionType");
const findResolver = require("../../resolvers/findResolver");

const userInteractionQuery = {
  type: userInteractionType,
  args: {
    user_id: {
      type: new GraphQLNonNull(GraphQLID),
    },
  },
  resolve: findResolver('UserInteraction'),
};

module.exports = userInteractionQuery;
