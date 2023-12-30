const { GraphQLEnumType } = require("graphql");

const interactionType = new GraphQLEnumType({
    name: 'InteractionType',
    values: {
        FOLLOW: { value: 'follow' },
        POKE: { value: 'poke' }
    }
});

module.exports = interactionType;
