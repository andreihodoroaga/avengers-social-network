const { GraphQLNonNull, GraphQLID, GraphQLString, GraphQLInputObjectType } = require("graphql");

const userImageType = new GraphQLInputObjectType({
  name: "UserImageInput",
  fields: {
    user_id: {
      type: new GraphQLNonNull(GraphQLID),
    },
    profile_picture_blob: {
      type: new GraphQLNonNull(GraphQLString),
    },
  },
});

module.exports = userImageType;
