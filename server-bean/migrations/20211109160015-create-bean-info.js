"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("beanInfos", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      beanId: {
        type: Sequelize.INTEGER,
      },
      beanName: {
        type: Sequelize.STRING,
      },
      origin: {
        type: Sequelize.STRING,
      },
      fragrance: {
        type: Sequelize.INTEGER,
      },
      acidity: {
        type: Sequelize.INTEGER,
      },
      sweetness: {
        type: Sequelize.INTEGER,
      },
      bitterness: {
        type: Sequelize.INTEGER,
      },
      body: {
        type: Sequelize.INTEGER,
      },
      beanImage: {
        type: Sequelize.STRING,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("beanInfos");
  },
};
