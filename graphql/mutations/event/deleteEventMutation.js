const deleteEventResolver = require("../../resolvers/event/deleteEventResolver");
const { GraphQLNonNull, GraphQLID, GraphQLBoolean } = require("graphql");

const deleteEventMutation = {
  type: GraphQLBoolean,

  args: {
    id: {
      type: new GraphQLNonNull(GraphQLID),
    },
  },
  resolve: deleteEventResolver,
};

module.exports = deleteEventMutation;
