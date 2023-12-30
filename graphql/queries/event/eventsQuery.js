const { GraphQLList } = require("graphql");
const eventType = require("../../types/event/eventType");
const db = require("../../../models");
const getEventsResolver = require("../../resolvers/event/getEventsResolver");

const eventsQuery = {
  type: new GraphQLList(eventType),
  resolve: getEventsResolver,
};

module.exports = eventsQuery;
