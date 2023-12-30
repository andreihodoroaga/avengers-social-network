const { GraphQLNonNull, GraphQLID, GraphQLString, GraphQLInputObjectType } = require("graphql");
const CustomDateType = require("../customDateType");

const eventInputType = new GraphQLInputObjectType({
  name: "EventInput",
  fields: {
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
    }
  },
});

module.exports = eventInputType;
