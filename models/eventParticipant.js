"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class EventParticipant extends Model {
    static associate(models) {
      // Association with Event model
      EventParticipant.belongsTo(models.Event, {
        foreignKey: 'event_id',
        targetKey: 'id',
        as: 'event',
      });

      // Association with User model
      EventParticipant.belongsTo(models.User, {
        foreignKey: 'participant_id',
        targetKey: 'id',
        as: 'participant',
      });
    }
  }

  EventParticipant.init(
    { 
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
    },
    {
      sequelize,
      modelName: "EventParticipant",
    }
  );

  return EventParticipant;
};
