"use strict";

const fs = require("fs");
const path = require("path");
const Sequelize = require("sequelize");
const process = require("process");
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || "development";
const config = require(__dirname + "/../config/config.json")[env];
const db = {};

let sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(config.database, config.username, config.password, config);
}

fs.readdirSync(__dirname)
  .filter(file => {
    return file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js" && file.indexOf(".test.js") === -1;
  })
  .forEach(file => {
    const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);
    db[model.name] = model;
  });

db.UserInteraction.belongsTo(db.User, { as: "initiator", foreignKey: "user_id_initiator", targetKey: "user_id" });
db.UserInteraction.belongsTo(db.User, { as: "recipient", foreignKey: "user_id_recipient", targetKey: "user_id" });

db.User.belongsToMany(db.Event, { through: db.EventParticipant, foreignKey: "participant_id", otherKey: "event_id"});
db.Event.belongsToMany(db.User, { through: db.EventParticipant, foreignKey: "event_id", otherKey: "participant_id", as: "event_participants" });
db.Event.belongsTo(db.User, { as: "organiser", foreignKey: "event_organiser_user_id", targetKey: "user_id" });

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

// sequelize
//   .sync({ force: true }) // Set force to true to drop existing tables and re-create them
//   .then(() => {
//     console.log("Database synchronized");
//   })
//   .catch(error => {
//     console.error("Error synchronizing the database:", error);
//   });

module.exports = db;
