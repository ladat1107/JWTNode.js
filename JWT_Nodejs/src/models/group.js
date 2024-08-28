'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Group extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Group.belongsToMany(models.Role, {
        through: models.GroupRole,
        foreignKey: 'groupId',
        as: "groupData",
      });
      Group.hasMany(models.User, {
        foreignKey: 'groupId',
        targetKey: 'id',
        as: 'userGroup',
      });
    }
  }
  Group.init({
    name: DataTypes.STRING,
    description: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Group',
  });
  return Group;
};