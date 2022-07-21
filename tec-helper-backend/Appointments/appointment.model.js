const { DataTypes } = require("sequelize");

module.exports = model;

function model(sequelize) {
  const attributes = {
    user_id: { type: DataTypes.STRING, allowNull: false },
    helper_id: { type: DataTypes.STRING, allowNull: true },
    date_time: { type: DataTypes.DATE, allowNull: false },
    status: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    duration: { type: DataTypes.INTEGER, allowNull: false },
  };

  return sequelize.define("Appointment", attributes);
}
