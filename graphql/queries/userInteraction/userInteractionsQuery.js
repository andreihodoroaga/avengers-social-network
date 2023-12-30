const { GraphQLList } = require("graphql");
const userInteractionType = require("../../types/userInteraction/userInteractionType");
const db = require("../../../models");

const userInteractionsQuery = {
  type: new GraphQLList(userInteractionType),
  resolve: () => db.UserInteraction.findAll(),
};

module.exports = userInteractionsQuery;
