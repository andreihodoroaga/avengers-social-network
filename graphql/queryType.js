const { GraphQLObjectType } = require("graphql");

const postQuery = require("./queries/post/postQuery");
const postsQuery = require("./queries/post/postsQuery");

const usersQuery = require("./queries/user/usersQuery");
const userQuery = require("./queries/user/userQuery");
const postsByUserIdQuery = require("./queries/post/postsByUserIdQuery");
const trendingPostsQuery = require("./queries/post/trendingPostsQuery");

const userInteractionQuery = require("./queries/userInteraction/userInteractionQuery");
const userInteractionsQuery = require("./queries/userInteraction/userInteractionsQuery");
const postInteractionQuery = require("./queries/postInteraction/postInteractionQuery");
const postInteractionsQuery = require("./queries/postInteraction/postInteractionsQuery");

const eventQuery = require("./queries/event/eventQuery");
const eventsQuery = require("./queries/event/eventsQuery");

const queryType = new GraphQLObjectType({
  name: "Query",
  fields: {
    users: usersQuery,
    user: userQuery,
    post: postQuery,
    posts: postsQuery,
    postsByUserId: postsByUserIdQuery,
    trendingPosts: trendingPostsQuery,
    userInteraction: userInteractionQuery,
    userInteractions: userInteractionsQuery,
    postInteraction: postInteractionQuery,
    postInteractions: postInteractionsQuery,
    event: eventQuery,
    events: eventsQuery,
  },
});

module.exports = queryType;
