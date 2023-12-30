const { GraphQLScalarType } = require('graphql');

const CustomTimestampType = new GraphQLScalarType({
  name: 'CustomTimestamp',
  description: 'Timestamp custom output scalar type',
  serialize(value) {
    return new Date(value).toISOString();
  },
  parseValue(value) {
    return value;
  },
  parseLiteral(ast) {
    return (ast.value);
  }
});

module.exports = CustomTimestampType;