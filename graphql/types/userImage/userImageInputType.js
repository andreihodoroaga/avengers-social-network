const { GraphQLNonNull, GraphQLID, GraphQLString, GraphQLInputObjectType } = require("graphql");

const userImageType = new GraphQLInputObjectType({
  name: "UserImageInput",
  fields: {
    profile_picture_blob: {
      type: new GraphQLNonNull(GraphQLString),
    },
  },
});

module.exports = userImageType;
