require("dotenv").config(); // Load environment variables
const { Sequelize } = require("sequelize");

// Initialize Sequelize connection
const sequelize = new Sequelize(process.env.DATABASE_URL, {
  dialect: "postgres",
  logging: false, // Disable SQL logging in console
});
module.exports = { sequelize };
