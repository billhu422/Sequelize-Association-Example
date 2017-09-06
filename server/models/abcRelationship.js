'use strict';
module.exports = function(sequelize, DataTypes) {
  var abcRelationship = sequelize.define('abcRelationship', {
    abcId: DataTypes.INTEGER,
    subId: DataTypes.INTEGER,
    type: DataTypes.STRING,
  });

  return abcRelationship;
};
