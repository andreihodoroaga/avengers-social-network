const { GraphQLObjectType, GraphQLNonNull, GraphQLID, GraphQLString } = require("graphql");

const userImageType = new GraphQLObjectType({
  name: "UserImage",
  fields: {
    id: {
      type: new GraphQLNonNull(GraphQLID),
    },
    user_id: {
      type: new GraphQLNonNull(GraphQLID),
    },
    profile_picture_path: {
      type: new GraphQLNonNull(GraphQLString),
    },
  },
});

module.exports = userImageType;
