const { GraphQLObjectType, GraphQLNonNull, GraphQLID, GraphQLString } = require("graphql");
const CustomDateType = require("../customDateType");

const userType = new GraphQLObjectType({
  name: "User",
  fields: {
    user_id: {
      type: new GraphQLNonNull(GraphQLID),
    },
    username: {
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
      type: GraphQLString,
    },
  },
});

module.exports = userType;
