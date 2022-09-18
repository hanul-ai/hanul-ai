const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('related', {
    num: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    post_num: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'post',
        key: 'num'
      }
    },
    content: {
      type: DataTypes.TEXT,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'related',
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
        name: "FK_related_post",
        using: "BTREE",
        fields: [
          { name: "post_num" },
        ]
      },
    ]
  });
};
