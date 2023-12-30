const { GraphQLObjectType, GraphQLNonNull, GraphQLID, GraphQLEnumType } = require("graphql");
const CustomTimestampType = require("../customTimestampType");
const interactionType = require("./interactionType");

const userInteractionType = new GraphQLObjectType({
  name: "UserInteraction",
  fields: {
    user_interaction_id: {
      type: new GraphQLNonNull(GraphQLID),
    },
    interaction_type: {
      type: new GraphQLNonNull(interactionType),
    },
    user_id_initiator: {
      type: new GraphQLNonNull(GraphQLID),
    },
    user_id_recipient: {
      type: new GraphQLNonNull(GraphQLID),
    },
    timestamp: {
      type: new GraphQLNonNull(CustomTimestampType),
    },
  },
});

module.exports = userInteractionType;
