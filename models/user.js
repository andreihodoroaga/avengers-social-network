"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      User.hasMany(models.UserPostInteraction, {
        foreignKey: "user_id",
      });
      User.belongsToMany(models.Event, { 
        through: models.EventParticipant, 
        foreignKey: "participant_id", 
        otherKey: "event_id"
      });
      
      User.hasOne(models.UserImage, {
        foreignKey: "user_id",
        as: "user_image",
        onDelete: "CASCADE",
        onUpdate: "CASCADE"
      });
    }
  }
  User.init(
    {
      user_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      first_name: {
        type: DataTypes.STRING(50),
        allowNull: false,
      },
      last_name: {
        type: DataTypes.STRING(50),
        allowNull: false,
      },
      date_of_birth: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      bio: {
        type: DataTypes.STRING(100),
      },
      profile_picture: {
        type: DataTypes.INTEGER,
      },
    },
    {
      sequelize,
      modelName: "User",
    }
  );
  return User;
};
