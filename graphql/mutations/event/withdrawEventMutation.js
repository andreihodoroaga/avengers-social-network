const withdrawEventResolver = require("../../resolvers/event/withdrawEventResolver");
const { GraphQLNonNull, GraphQLID, GraphQLBoolean } = require("graphql");

const withdrawEventMutation = {
  type: GraphQLBoolean,

  args: {
    id: {
      type: new GraphQLNonNull(GraphQLID),
    }
  },
  resolve: withdrawEventResolver,
};

module.exports = withdrawEventMutation;
