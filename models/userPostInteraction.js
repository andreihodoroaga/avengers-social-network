'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class UserPostInteraction extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      UserPostInteraction.belongsTo(models.Post, {
        foreignKey: "post_id",
      });

      UserPostInteraction.belongsTo(models.User, {
        foreignKey: "user_id",
      });
    }
  }
  UserPostInteraction.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    post_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    interaction_type: {
      type: DataTypes.ENUM,
      values: ["like", "bookmark", "repost"],
      allowNull: false,
    },
    timestamp: {
      type: DataTypes.VIRTUAL,
      async get() {
        return await this.getDataValue('createdAt');
      }
    }
  }, {
    sequelize,
    modelName: 'UserPostInteraction',
  });
  return UserPostInteraction;
};