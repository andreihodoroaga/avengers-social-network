const { GraphQLList } = require("graphql");
const postInteractionType = require("../../types/postInteraction/postInteractionType");
const db = require("../../../models");

const postInteractionsQuery = {
  type: new GraphQLList(postInteractionType),
  resolve: () => db.UserPostInteraction.findAll(),
};

module.exports = postInteractionsQuery;
