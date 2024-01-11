const withdrawEventResolver = require("../../resolvers/event/withdrawEventResolver");
const { GraphQLNonNull, GraphQLID, GraphQLBoolean } = require("graphql");

const withdrawEventMutation = {
  type: GraphQLBoolean,

  args: {
    event_id: {
      type: new GraphQLNonNull(GraphQLID),
    }
  },
  resolve: withdrawEventResolver,
};

module.exports = withdrawEventMutation;
