const { GraphQLObjectType } = require("graphql");
const postsQuery = require("./queries/posts");

const queryType = new GraphQLObjectType({
  name: "Query",
  fields: {
    posts: postsQuery,
  },
});

module.exports = queryType;
