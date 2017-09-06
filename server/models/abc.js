'use strict';
module.exports = function(sequelize, DataTypes) {
  var abc = sequelize.define('abc', {
    name: DataTypes.STRING,
    description: DataTypes.TEXT,
  });

  abc.associate = function(models) {
    abc.belongsToMany(models.abc, { through: 'abcRelationship', as: 'sub' });
  };

  return abc;
};
