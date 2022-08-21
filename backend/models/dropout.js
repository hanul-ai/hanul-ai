const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('dropout', {
    num: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    email: {
      type: DataTypes.STRING(100),
      allowNull: false,
      references: {
        model: 'user',
        key: 'email'
      }
    },
    time: {
      type: DataTypes.DATEONLY,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'dropout',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "num" },
        ]
      },
      {
        name: "FK_dropout_user",
        using: "BTREE",
        fields: [
          { name: "email" },
        ]
      },
    ]
  });
};
