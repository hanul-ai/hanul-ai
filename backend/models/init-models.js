var DataTypes = require("sequelize").DataTypes;
var _admin = require("./admin");
var _dropout = require("./dropout");
var _image = require("./image");
var _post = require("./post");
var _stat = require("./stat");
var _user = require("./user");

function initModels(sequelize) {
  var admin = _admin(sequelize, DataTypes);
  var dropout = _dropout(sequelize, DataTypes);
  var image = _image(sequelize, DataTypes);
  var post = _post(sequelize, DataTypes);
  var stat = _stat(sequelize, DataTypes);
  var user = _user(sequelize, DataTypes);

  dropout.belongsTo(user, { as: "email_user", foreignKey: "email"});
  user.hasMany(dropout, { as: "dropouts", foreignKey: "email"});
  image.belongsTo(user, { as: "email_user", foreignKey: "email"});
  user.hasMany(image, { as: "images", foreignKey: "email"});

  return {
    admin,
    dropout,
    image,
    post,
    stat,
    user,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
