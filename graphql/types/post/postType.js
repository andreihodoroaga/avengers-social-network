const { 
  GraphQLObjectType, 
  GraphQLNonNull, 
  GraphQLID, 
  GraphQLString, 
  GraphQLInt 
} = require("graphql"); 
const CustomTimestampType = require("../customTimestampType"); 
const userType = require("../user/userType"); 

const postType = new GraphQLObjectType({ 
  name: "Post", 
  fields: () => ({ 
    id: { 
      type: new GraphQLNonNull(GraphQLID), 
    }, 
    user: { 
      type: new GraphQLNonNull(userType), 
      resolve: async (source) => { 
        return await source.getUser();   
      } 
    }, 
    parent_post: { 
      type: postType,
      resolve: async (source) => {
        return await source.getParentPost();
      } 
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
  }), 
}); 
 
module.exports = postType; 
