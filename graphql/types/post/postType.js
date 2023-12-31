const {
  GraphQLObjectType,
  GraphQLNonNull,
  GraphQLID,
  GraphQLString,
  GraphQLInt
} = require("graphql");
const CustomTimestampType = require("../customTimestampType");

const postType = new GraphQLObjectType({
  name: "Post",
  fields: {
    post_id: {
      type: new GraphQLNonNull(GraphQLID),
    },
    user_id: {
      type: new GraphQLNonNull(GraphQLID),
    },
    parent_post_id: {
      type: GraphQLID,
    },
    text: {
      type: new GraphQLNonNull(GraphQLString),
    },
    timestamp: {
      type: new GraphQLNonNull(CustomTimestampType),
    },
    no_likes: {
      type: new GraphQLNonNull(GraphQLInt)
    },
    no_bookmarks: {
      type: new GraphQLNonNull(GraphQLInt)
    },
    no_reposts: {
      type: new GraphQLNonNull(GraphQLInt)
    },
  },
});

module.exports = postType;
