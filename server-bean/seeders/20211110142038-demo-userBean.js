'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */

    return queryInterface.bulkInsert(
      'userBeans', [
        {
          userId: 'test1',
          beanId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        }, {
          userId: 'test1',
          beanId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        }, {
          userId: 'test1',
          beanId: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        }, {
          userId: 'test1',
          beanId: 6,
          createdAt: new Date(),
          updatedAt: new Date(),
        }, {
          userId: 'test1',
          beanId: 7,
          createdAt: new Date(),
          updatedAt: new Date(),
        }, {
          userId: 'test1',
          beanId: 12,
          createdAt: new Date(),
          updatedAt: new Date(),
        }, {
          userId: 'test1',
          beanId: 15,
          createdAt: new Date(),
          updatedAt: new Date(),
        }, {
          userId: 'test2',
          beanId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        }, {
          userId: 'test2',
          beanId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        }, {
          userId: 'test2',
          beanId: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        }, {
          userId: 'test2',
          beanId: 6,
          createdAt: new Date(),
          updatedAt: new Date(),
        }, {
          userId: 'test2',
          beanId: 7,
          createdAt: new Date(),
          updatedAt: new Date(),
        }, {
          userId: 'test2',
          beanId: 12,
          createdAt: new Date(),
          updatedAt: new Date(),
        }, {
          userId: 'test2',
          beanId: 15,
          createdAt: new Date(),
          updatedAt: new Date(),
        }, {
          userId: 'test3',
          beanId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        }, {
          userId: 'test3',
          beanId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        }, {
          userId: 'test3',
          beanId: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        }, {
          userId: 'test3',
          beanId: 6,
          createdAt: new Date(),
          updatedAt: new Date(),
        }, {
          userId: 'test3',
          beanId: 8,
          createdAt: new Date(),
          updatedAt: new Date(),
        }, {
          userId: 'test3',
          beanId: 14,
          createdAt: new Date(),
          updatedAt: new Date(),
        }, {
          userId: 'test3',
          beanId: 16,
          createdAt: new Date(),
          updatedAt: new Date(),
        }, 
      ]
    );
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */

      return queryInterface.bulkDelete('userBeans', null, {});
  }
};
