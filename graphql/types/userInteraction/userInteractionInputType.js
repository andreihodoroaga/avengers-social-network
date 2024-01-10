const { GraphQLInputObjectType, GraphQLNonNull, GraphQLID } = require("graphql");
const interactionType = require("./interactionType");

const userInteractionInputType = new GraphQLInputObjectType({
  name: "UserInteractionInput",
  fields: {
    interaction_type: {
      type: new GraphQLNonNull(interactionType),
    },
    user_id_recipient: {
      type: new GraphQLNonNull(GraphQLID),
    }
  },
});

module.exports = userInteractionInputType;
