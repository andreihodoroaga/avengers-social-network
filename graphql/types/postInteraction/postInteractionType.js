const { GraphQLObjectType, GraphQLNonNull, GraphQLID, GraphQLEnumType } = require("graphql");
const CustomTimestampType = require("../customTimestampType");
const interactionType = require("./interactionType");

const postInteractionType = new GraphQLObjectType({
  name: "PostInteraction",
  fields: {
    post_interaction_id: {
      type: new GraphQLNonNull(GraphQLID),
    },
    post_id: {
      type: new GraphQLNonNull(GraphQLID),
    },
    user_id: {
      type: new GraphQLNonNull(GraphQLID),
    },
    interaction_type: {
      type: new GraphQLNonNull(interactionType),
    },
    timestamp: {
      type: new GraphQLNonNull(CustomTimestampType),
    },
  },
});

module.exports = postInteractionType;
