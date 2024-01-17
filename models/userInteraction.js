"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class UserInteraction extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      UserInteraction.belongsTo(models.User, { 
        as: "initiator", 
        foreignKey: "user_id_initiator", 
        targetKey: "id"
      });
      UserInteraction.belongsTo(models.User, {
        as: "recipient", 
        foreignKey: "user_id_recipient", 
        targetKey: "id" 
      });
    }
  }
  UserInteraction.init(
    {
      id: {
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
        type: DataTypes.VIRTUAL,
        async get() {
          return await this.getDataValue('createdAt');
        }
      }
    },
    {
      sequelize,
      modelName: "UserInteraction",
    }
  );

  return UserInteraction;
};
