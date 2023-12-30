const { GraphQLEnumType } = require("graphql");

const interactionType = new GraphQLEnumType({
    name: 'PostInteractionType',
    values: {
        LIKE: { value: 'like' },
        BOOKMARK: { value: 'bookmark' },
        REPOST: { value: 'repost' },
    }
});

module.exports = interactionType;
