const { GraphQLObjectType } = require("graphql");
const deletePostMutation = require("./mutations/post/deletePostMutation");
const updatePostMutation = require("./mutations/post/updatePostMutation");
const createPostMutation = require("./mutations/post/createPostMutation");
const createUserMutation = require("./mutations/user/createUserMutation");
const deleteUserMutation = require("./mutations/user/deleteUserMutation");
const updateUserMutation = require("./mutations/user/updateUserMutation");

const createUserInteractionMutation = require("./mutations/userInteraction/createUserInteractionMutation");
const deleteUserInteractionMutation = require("./mutations/userInteraction/deleteUserInteractionMutation");

const mutationType = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    createUser: createUserMutation,
    updateUser: updateUserMutation,
    deleteUser: deleteUserMutation,
    createPost: createPostMutation,
    updatePost: updatePostMutation,
    deletePost: deletePostMutation,
    createUserInteraction: createUserInteractionMutation,
    deleteUserInteraction: deleteUserInteractionMutation,
  },
});

module.exports = mutationType;
