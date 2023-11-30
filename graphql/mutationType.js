const { GraphQLObjectType } = require("graphql");
const createPostMutation = require("./mutations/createPostMutation");

const mutationType = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    createPost: createPostMutation,
  },
});

module.exports = mutationType;
