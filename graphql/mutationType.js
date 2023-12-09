const { GraphQLObjectType } = require("graphql");
const createPostMutation = require("./mutations/createPostMutation");
const createUserMutation = require("./mutations/createUserMutation");
const deleteUserMutation = require("./mutations/deleteUserMutation");
const updateUserMutation = require("./mutations/updateUserMutation");

const mutationType = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    createUser: createUserMutation,
    updateUser: updateUserMutation,
    deleteUser: deleteUserMutation,
  },
});

module.exports = mutationType;
