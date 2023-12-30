const { GraphQLInputObjectType, GraphQLNonNull, GraphQLID } = require("graphql");
const interactionType = require("./interactionType");

const postInteractionInputType = new GraphQLInputObjectType({
  name: "postInteractionInput",
  fields: {
    post_id: {
      type: new GraphQLNonNull(GraphQLID),
    },
    user_id: {
      type: new GraphQLNonNull(GraphQLID),
    },
    interaction_type: {
      type: new GraphQLNonNull(interactionType),
    },
  },
});

module.exports = postInteractionInputType;
