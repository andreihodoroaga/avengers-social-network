const { GraphQLObjectType, GraphQLNonNull, GraphQLID, GraphQLString, GraphQLList } = require("graphql");
const eventType = require("../event/eventType")
const userType = require("../user/userType")

const eventParticipantType = new GraphQLObjectType({
  name: "EventParticipant",
  fields: {
    id: {
      type: new GraphQLNonNull(GraphQLID),
    },
    event: {
      type: new GraphQLNonNull(eventType),
      resolve: async (source) => {
        return await source.getEvent();
      } 
    },
    participant: {
      type: new GraphQLNonNull(userType),
      resolve: async (source) => {
        return await source.getParticipant();
      }
    }
  },
});

module.exports = eventParticipantType;
