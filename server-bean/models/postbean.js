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
      postBean.hasOne(
        models.beanInfo,
        {
          sourceKey: 'beanId',
          foreignKey: 'beanId',
        }
      );
    }
  };
  postBean.init({
    postId: DataTypes.INTEGER,
    beanId: DataTypes.INTEGER,
    rate: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'postBean',
  });
  return postBean;
};