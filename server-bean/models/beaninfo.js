"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class beanInfo extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      beanInfo.hasMany(
        models.userBean,
        {
          sourceKey: 'beanId',
          foreignKey: 'beanId',
        }
      );
    }
  }
  beanInfo.init(
    {
      beanId: DataTypes.INTEGER,
      beanName: DataTypes.STRING,
      origin: DataTypes.STRING,
      fragrance: DataTypes.INTEGER,
      acidity: DataTypes.INTEGER,
      sweetness: DataTypes.INTEGER,
      bitterness: DataTypes.INTEGER,
      body: DataTypes.INTEGER,
      description: DataTypes.STRING,
      beanImage: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "beanInfo",
    }
  );
  return beanInfo;
};
