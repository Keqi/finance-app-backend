const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize('postgres://macior:elo123@localhost:5432/finance_manager_database')

const FinanceRecord = sequelize.define('FinanceRecord', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false
  },

  created_at: {
    type: DataTypes.DATE
  },

  date: {
    type: DataTypes.DATEONLY,
    allowNull: false
  },

  etf_capital: {
    type: DataTypes.FLOAT
  },

  etf_total: {
    type: DataTypes.FLOAT
  },

  bonds_capital: {
    type: DataTypes.FLOAT
  },

  bonds_total: {
    type: DataTypes.FLOAT
  },

  inflation: {
    type: DataTypes.FLOAT
  },

  exchange_rate: {
    type: DataTypes.FLOAT
  },
}, {
  tableName: 'finance_records',
  timestamps: false
});

module.exports = {
  FinanceRecord
}