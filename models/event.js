"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Event extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Event.belongsToMany(models.User, { 
        through: models.EventParticipant, 
        foreignKey: "event_id", 
        otherKey: "participant_id", 
        as: "event_participants" 
      });
      Event.belongsTo(models.User, { 
        as: "organiser", 
        foreignKey: "event_organiser_user_id", 
        targetKey: "user_id" 
      });
    }
  }
  Event.init(
    {
      event_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      event_name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      location: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      event_timestamp: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      details: {
        type: DataTypes.STRING,
        allowNull: false,
      }
    },
    {
      sequelize,
      modelName: "Event",
    }
  );

  return Event;
};
