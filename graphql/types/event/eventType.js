const { GraphQLObjectType, GraphQLNonNull, GraphQLID, GraphQLString, GraphQLList } = require("graphql");
const CustomDateType = require("../customDateType");
const userType = require("../user/userType");

const eventType = new GraphQLObjectType({
  name: "Event",
  fields: {
    id: {
      type: new GraphQLNonNull(GraphQLID),
    },
    event_organiser: {
      type: new GraphQLNonNull(userType),
      resolve: async (source) => {
        return await source.getOrganiser();
      }
    },
    event_name: {
      type: new GraphQLNonNull(GraphQLString),
    },
    location: {
      type: new GraphQLNonNull(GraphQLString),
    },
    details: {
      type: new GraphQLNonNull(GraphQLString),
    },
    event_timestamp: {
      type: new GraphQLNonNull(CustomDateType),
    },
    event_participants: {
      type: new GraphQLList(userType),
      resolve: async (source) => {
        return await source.getEvent_participants();
      }
    }
  },
});

module.exports = eventType;
