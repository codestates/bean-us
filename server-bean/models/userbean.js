'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class userBean extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      // userBean.belongsTo(
      //   models.beanInfo,
      //   {
      //     targetKey: 'beanId',
      //     foreignKey: 'beanId',
      //   }
      // );
    }
  };
  userBean.init({
    userId: DataTypes.STRING,
    beanId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'userBean',
  });
  return userBean;
};