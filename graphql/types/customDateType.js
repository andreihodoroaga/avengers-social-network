const { GraphQLScalarType } = require('graphql');

const CustomDateType = new GraphQLScalarType({
  name: 'CustomDate',
  description: 'Date custom output scalar type',
  serialize(value) {
    return new Date(value).toISOString().split('T')[0];
  },
  parseValue(value) {
    return value;
  },
  parseLiteral(ast) {
    return (ast.value);
  }
});

module.exports = CustomDateType;