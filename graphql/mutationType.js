const { GraphQLObjectType } = require("graphql");
const deletePostMutation = require("./mutations/post/deletePostMutation");
const updatePostMutation = require("./mutations/post/updatePostMutation");
const createPostMutation = require("./mutations/post/createPostMutation");
const createUserMutation = require("./mutations/user/createUserMutation");
const deleteUserMutation = require("./mutations/user/deleteUserMutation");
const updateUserMutation = require("./mutations/user/updateUserMutation");

const createUserInteractionMutation = require("./mutations/userInteraction/createUserInteractionMutation");
const deleteUserInteractionMutation = require("./mutations/userInteraction/deleteUserInteractionMutation");

const createEventMutation = require("./mutations/event/createEventMutation");
const updateEventMutation = require("./mutations/event/updateEventMutation");
const deleteEventMutation = require("./mutations/event/deleteEventMutation");
const participateEventMutation = require("./mutations/event/participateEventMutation");
const withdrawEventMutation = require("./mutations/event/withdrawEventMutation");

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
    createEvent: createEventMutation,
    updateEvent: updateEventMutation,
    deleteEvent: deleteEventMutation,
    participateInEvent: participateEventMutation,
    withdrawFromEvent: withdrawEventMutation,
  },
});

module.exports = mutationType;
