const createEventResolver = require("../../resolvers/event/createEventResolver");
const eventInputType = require("../../types/event/eventInputType");
const eventType = require("../../types/event/eventType");

const createEventMutation = {
  type: eventType,

  args: {
    event: {
      type: eventInputType,
    },
  },
  resolve: createEventResolver,
};

module.exports = createEventMutation;
