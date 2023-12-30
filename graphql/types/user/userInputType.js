const { GraphQLInputObjectType, GraphQLNonNull, GraphQLString } = require("graphql");
const CustomDateType = require("../customDateType");

const userInputType = new GraphQLInputObjectType({
  name: "UserInput",
  fields: {
    username: {
      type: new GraphQLNonNull(GraphQLString),
    },
    password: {
      type: new GraphQLNonNull(GraphQLString),
    },
    first_name: {
      type: new GraphQLNonNull(GraphQLString),
    },
    last_name: {
      type: new GraphQLNonNull(GraphQLString),
    },
    date_of_birth: {
      type: new GraphQLNonNull(CustomDateType),
    },
    bio: {
      type: GraphQLString,
    },
    profile_picture: {
      type: GraphQLID,
    },
  },
});

module.exports = userInputType;
