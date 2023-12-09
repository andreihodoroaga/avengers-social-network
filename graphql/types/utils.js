const { GraphQLScalarType } = require("graphql");

const dateValue = value => {
  if (value instanceof Date) {
    return +value;
  }
};

// https://javascript.plainenglish.io/creating-graphql-scalar-types-with-express-graphql-aafa275e25c1
const CustomDateType = new GraphQLScalarType({
  name: "Date",
  serialize: dateValue,
  parseValue: dateValue,
  parseLiteral(ast) {
    return dateValue(ast.value);
  },
});

module.exports = CustomDateType;
