const updateEventResolver = require("../../resolvers/event/updateEventResolver");
const { GraphQLNonNull, GraphQLID } = require("graphql");
const eventType = require("../../types/event/eventType");
const eventInputType = require("../../types/event/eventInputType");

const updateEventMutation = {
  type: eventType,

  args: {
    event_id: {
      type: new GraphQLNonNull(GraphQLID),
    },
    event: {
      type: eventInputType,
    },
  },
  resolve: updateEventResolver,
};

module.exports = updateEventMutation;
