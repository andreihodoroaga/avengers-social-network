const { GraphQLObjectType, GraphQLNonNull, GraphQLID, GraphQLEnumType } = require("graphql");
const CustomTimestampType = require("../customTimestampType");
const interactionType = require("./interactionType");
const userType = require("../user/userType");

const userInteractionType = new GraphQLObjectType({
  name: "UserInteraction",
  fields: {
    id: {
      type: new GraphQLNonNull(GraphQLID),
    },
    interaction_type: {
      type: new GraphQLNonNull(interactionType),
    },
    initiator: {
      type: new GraphQLNonNull(userType),
      resolve: async (source) => { 
        return await source.getInitiator();   
      } 
    },
    recipient: {
      type: new GraphQLNonNull(userType),
      resolve: async (source) => { 
        return await source.getRecipient();   
      } 
    },
    timestamp: {
      type: new GraphQLNonNull(CustomTimestampType),
    },
  },
});

module.exports = userInteractionType;
