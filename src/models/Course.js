const { DataTypes } = require("sequelize");
const { sequelize } = require("./index");

const Course = sequelize.define("Course", {
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
  },
  duration: {
    type: DataTypes.STRING,
  },
  outcome: {
    type: DataTypes.STRING,
  },
});

module.exports = Course;
