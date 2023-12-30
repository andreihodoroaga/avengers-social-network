const { GraphQLObjectType } = require("graphql");
const createUserMutation = require("./mutations/createUserMutation");
const deleteUserMutation = require("./mutations/deleteUserMutation");
const updateUserMutation = require("./mutations/updateUserMutation");
const createPostMutation = require("./mutations/createPostMutation");
const deletePostMutation = require("./mutations/deletePostMutation");
const updatePostMutation = require("./mutations/updatePostMutation");

const mutationType = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    createUser: createUserMutation,
    updateUser: updateUserMutation,
    deleteUser: deleteUserMutation,
    createPost: createPostMutation,
    updatePost: updatePostMutation,
    deletePost: deletePostMutation,
  },
});

module.exports = mutationType;
