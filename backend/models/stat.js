const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('stat', {
    today: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      primaryKey: true
    },
    today_num: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    image_num: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'stat',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "today" },
        ]
      },
    ]
  });
};
