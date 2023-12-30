const { GraphQLObjectType, GraphQLNonNull, GraphQLID, GraphQLString } = require("graphql");

const userImageType = new GraphQLObjectType({
  name: "UserImage",
  fields: {
    user_image_id: {
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
