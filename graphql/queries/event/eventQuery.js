const { GraphQLNonNull, GraphQLID } = require("graphql");
const eventType = require("../../types/event/eventType");
const getEventResolver = require("../../resolvers/event/getEventResolver");

const eventQuery = {
  type: eventType,
  args: {
    id: {
      type: new GraphQLNonNull(GraphQLID),
    },
  },
  resolve: getEventResolver,
};

module.exports = eventQuery;
