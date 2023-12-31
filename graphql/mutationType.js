const { GraphQLObjectType } = require("graphql");
const deletePostMutation = require("./mutations/post/deletePostMutation");
const updatePostMutation = require("./mutations/post/updatePostMutation");
const createPostMutation = require("./mutations/post/createPostMutation");
const createUserMutation = require("./mutations/user/createUserMutation");
const deleteUserMutation = require("./mutations/user/deleteUserMutation");
const updateUserMutation = require("./mutations/user/updateUserMutation");

const createUserInteractionMutation = require("./mutations/userInteraction/createUserInteractionMutation");
const deleteUserInteractionMutation = require("./mutations/userInteraction/deleteUserInteractionMutation");
const createPostInteractionMutation = require("./mutations/postInteraction/createPostInteractionMutation");
const deletePostInteractionMutation = require("./mutations/postInteraction/deletePostInteractionMutation");

const createEventMutation = require("./mutations/event/createEventMutation");
const updateEventMutation = require("./mutations/event/updateEventMutation");
const deleteEventMutation = require("./mutations/event/deleteEventMutation");
const participateEventMutation = require("./mutations/event/participateEventMutation");
const withdrawEventMutation = require("./mutations/event/withdrawEventMutation");

const createUserImageMutation = require("./mutations/userImage/createUserImageMutation");
const deleteUserImageMutation = require("./mutations/userImage/deleteUserImageMutation");
const loginMutation = require("./mutations/login/loginMutation");

const db = require("../models");
const requireAuthorization = require("./operationUtils");

const mutationType = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    createUser: createUserMutation,
    updateUser: requireAuthorization(updateUserMutation, ({ user_id }) => user_id),
    deleteUser: requireAuthorization(deleteUserMutation, ({ user_id }) => user_id),
    createPost: requireAuthorization(createPostMutation, ({ post }) => post.user_id),
    updatePost: requireAuthorization(updatePostMutation, ({ post_id }) => db.Post.findByPk(post_id).then((post) => post.user_id)),
    deletePost: requireAuthorization(deletePostMutation, ({ post_id }) => db.Post.findByPk(post_id).then((post) => post.user_id)),
    createUserInteraction: requireAuthorization(createUserInteractionMutation, ({ userInteraction }) => userInteraction.user_id_initiator),
    deleteUserInteraction: requireAuthorization(deleteUserInteractionMutation, ({ user_interaction_id }) => db.UserInteraction.findByPk(user_interaction_id).then((user_interaction) => user_interaction.user_id_initiator)),
    createPostInteraction: requireAuthorization(createPostInteractionMutation, ({ postInteraction }) => postInteraction.user_id),
    deletePostInteraction: requireAuthorization(deletePostInteractionMutation, ({ post_interaction_id }) => db.PostInteraction.findByPk(post_interaction_id).then((post_interaction) => post_interaction.user_id)),
    createEvent: requireAuthorization(createEventMutation, ({ event }) => event.event_organiser_user_id),
    updateEvent: requireAuthorization(updateEventMutation, ({ event_id }) => db.Event.findByPk(event_id).then((event) => event.event_organiser_user_id)),
    deleteEvent: requireAuthorization(deleteEventMutation, ({ event_id }) => db.Event.findByPk(event_id).then((event) => event.event_organiser_user_id)),
    participateInEvent: requireAuthorization(participateEventMutation, ({ participant_id }) => participant_id),
    withdrawFromEvent: requireAuthorization(withdrawEventMutation, ({ participant_id }) => participant_id),
    uploadProfilePicture: requireAuthorization(createUserImageMutation, ({ userImage }) => userImage.user_id),
    deleteProfilePicture: requireAuthorization(deleteUserImageMutation, ({ user_id }) => user_id),
    login: loginMutation,
  },
});

module.exports = mutationType;
