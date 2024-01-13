const { GraphQLObjectType, GraphQLNonNull, GraphQLID, GraphQLString, GraphQLList } = require("graphql");
const CustomDateType = require("../customDateType");

const eventType = new GraphQLObjectType({
  name: "Event",
  fields: {
    id: {
      type: new GraphQLNonNull(GraphQLID),
    },
    event_organiser_user_id: {
      type: new GraphQLNonNull(GraphQLID),
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
      type: new GraphQLList(GraphQLID)
    }
  },
});

module.exports = eventType;
