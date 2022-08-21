const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('image', {
    num: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    path: {
      type: DataTypes.CHAR(100),
      allowNull: false
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
      type: DataTypes.DATE,
      allowNull: false
    },
    save: {
      type: DataTypes.CHAR(1),
      allowNull: false,
      defaultValue: "Y",
      comment: "Y\/N"
    }
  }, {
    sequelize,
    tableName: 'image',
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
        name: "FK__user",
        using: "BTREE",
        fields: [
          { name: "email" },
        ]
      },
    ]
  });
};
