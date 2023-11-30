const {
  GraphQLObjectType,
  GraphQLNonNull,
  GraphQLID,
  GraphQLString,
} = require("graphql");

const postType = new GraphQLObjectType({
  name: "Post",
  fields: {
    post_id: {
      type: new GraphQLNonNull(GraphQLID),
    },
    parent_post_id: {
      type: GraphQLID,
    },
    text: {
      type: new GraphQLNonNull(GraphQLString),
    },
    timestamp: {
      type: new GraphQLNonNull(GraphQLString),
    },
  },
});

module.exports = postType;
