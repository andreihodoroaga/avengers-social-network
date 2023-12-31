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
const requireAuthorization = require("./operationUtils");

const queryType = new GraphQLObjectType({
  name: "Query",
  fields: {
    users: requireAuthorization(usersQuery),
    user: requireAuthorization(userQuery),
    post: requireAuthorization(postQuery),
    posts: requireAuthorization(postsQuery),
    postsByUserId: requireAuthorization(postsByUserIdQuery),
    trendingPosts: requireAuthorization(trendingPostsQuery),
    userInteraction: requireAuthorization(userInteractionQuery),
    userInteractions: requireAuthorization(userInteractionsQuery),
    postInteraction: requireAuthorization(postInteractionQuery),
    postInteractions: requireAuthorization(postInteractionsQuery),
    event: requireAuthorization(eventQuery),
    events: requireAuthorization(eventsQuery),
  },
});

module.exports = queryType;
