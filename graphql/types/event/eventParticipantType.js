const { GraphQLObjectType, GraphQLNonNull, GraphQLID, GraphQLString, GraphQLList } = require("graphql");

const eventParticipantType = new GraphQLObjectType({
  name: "EventParticipant",
  fields: {
    id: {
      type: new GraphQLNonNull(GraphQLID),
    },
    event_id: {
      type: new GraphQLNonNull(GraphQLID),
    },
    participant_id: {
      type: new GraphQLNonNull(GraphQLID),
    }
  },
});

module.exports = eventParticipantType;
