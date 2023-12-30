const participateEventResolver = require("../../resolvers/event/participateEventResolver");
const { GraphQLNonNull, GraphQLID } = require("graphql");
const eventParticipantType = require("../../types/event/eventParticipantType");

const participateEventMutation = {
  type: eventParticipantType,

  args: {
    event_id: {
      type: new GraphQLNonNull(GraphQLID),
    },
    participant_id: {
      type: new GraphQLNonNull(GraphQLID),
    }
  },
  resolve: participateEventResolver,
};

module.exports = participateEventMutation;
