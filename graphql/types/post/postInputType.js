const {
  GraphQLInputObjectType,
  GraphQLNonNull,
  GraphQLID,
  GraphQLString,
} = require("graphql");

const postInputType = new GraphQLInputObjectType({
  name: "PostInput",
  fields: {
    parent_post_id: {
      type: GraphQLID,
    },
    text: {
      type: new GraphQLNonNull(GraphQLString),
    },
  },
});

module.exports = postInputType;
