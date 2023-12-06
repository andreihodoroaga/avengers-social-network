const { Sequelize, DataTypes } = require('sequelize');

const Event = sequelize.define('Event', {
  event_id: {
    type: DataTypes.INTEGER, 
    allowNull: false,
    primaryKey: true,
  },
  event_organiser_user_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    // check foreign key definition
  },
  location: {
    type: DataTypes.STRING,
    allowNull: false
  },
  created_timestamp: {
    type: DataTypes.DATE, 
    allowNull: false,
    // default: currentTimestamp
  },
  event_timestamp: {
    type: DataTypes.DATE, 
    allowNull: false,
    // default: currentTimestamp
  },
  details: {
    type: DataTypes.STRING,
    allowNull: false
  }
});