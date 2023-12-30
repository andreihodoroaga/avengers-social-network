"use strict";
const { Model } = require("sequelize");
const { User } = require("./user");

module.exports = (sequelize, DataTypes) => {
  class UserInteraction extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  UserInteraction.init(
    {
      user_interaction_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      interaction_type: {
        type: DataTypes.ENUM,
        values: ["follow", "poke"],
        allowNull: false,
      },
      timestamp: {
        type: DataTypes.DATE,
        allowNull: false,
      }
    },
    {
      sequelize,
      modelName: "UserInteraction",
    }
  );

  return UserInteraction;
};
