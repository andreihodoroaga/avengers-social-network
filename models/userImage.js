"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class UserImage extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      // UserImage.belongsTo(models.User, {
      //   foreignKey: "user_id",
      //   as: "user",
      //   onDelete: "CASCADE",
      //   onUpdate: "CASCADE"
      // });
    }
  }
  UserImage.init(
    { 
        user_image_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        profile_picture_path: {
            type: DataTypes.STRING,
            allowNull: false
        },
    },
    {
      sequelize,
      modelName: "UserImage",
    }
  );

  return UserImage;
};
