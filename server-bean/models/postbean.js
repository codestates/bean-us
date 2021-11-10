'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class postBean extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  postBean.init({
    postId: DataTypes.STRING,
    beanId: DataTypes.STRING,
    rate: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'postBean',
  });
  return postBean;
};