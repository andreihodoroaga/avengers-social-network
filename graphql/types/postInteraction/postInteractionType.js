const { GraphQLObjectType, GraphQLNonNull, GraphQLID, GraphQLEnumType } = require("graphql");
const CustomTimestampType = require("../customTimestampType");
const interactionType = require("./interactionType");
const postType = require("../post/postType");
const userType = require("../user/userType");

const postInteractionType = new GraphQLObjectType({
  name: "PostInteraction",
  fields: {
    id: {
      type: new GraphQLNonNull(GraphQLID),
    },
    post: {
      type: new GraphQLNonNull(postType),
      resolve: async (source) => { 
        return await source.getPost();   
      } 
    },
    user: {
      type: new GraphQLNonNull(userType),
      resolve: async (source) => { 
        return await source.getUser();   
      } 
    },
    interaction_type: {
      type: new GraphQLNonNull(interactionType),
    },
    timestamp: {
      type: new GraphQLNonNull(CustomTimestampType),
    },
  },
});

module.exports = postInteractionType;
