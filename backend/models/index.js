const path = require("path");
const Sequelize = require("sequelize");
const env = process.env.NODE_ENV || "development";

const config = require("../config/config.json").database[env];

const sequelize = new Sequelize.Sequelize(config.database, config.username, config.password, config);
const db = require("./init-models")(sequelize);

module.exports = { db, Sequelize, sequelize };