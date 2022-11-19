const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class CareerPath extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
  }
  CareerPath.init({
    name: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'CareerPath',
  });
  return CareerPath;
};