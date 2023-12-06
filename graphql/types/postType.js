const {
  GraphQLObjectType,
  GraphQLNonNull,
  GraphQLID,
  GraphQLString,
} = require("graphql");

const { Sequelize, DataTypes } = require('sequelize');

const Post = sequelize.define('Post', {
  post_id: {
    type: DataTypes.INTEGER, 
    allowNull: false,
    primaryKey: true,
  },
  user_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    // check foreign key definition
  },
  parent_post_id: {
    type: DataTypes.INTEGER,
    allowNull: true,
    default: null 
  },
  text: {
    type: DataTypes.STRING,
    allowNull: false
  },
  timestamp: {
    type: DataTypes.DATE, 
    allowNull: false,
    // default: currentTimestamp
  }
});

const postType = new GraphQLObjectType({
  name: "Post",
  fields: {
    post_id: {
      type: new GraphQLNonNull(GraphQLID),
    },
    parent_post_id: {
      type: GraphQLID,
    },
    text: {
      type: new GraphQLNonNull(GraphQLString),
    },
    timestamp: {
      type: new GraphQLNonNull(GraphQLString),
    },
  },
});

module.exports = postType;
