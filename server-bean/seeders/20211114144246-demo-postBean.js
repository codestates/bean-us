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

    return queryInterface.bulkInsert('postBeans', [
      {
        postId: 1,
        beanId: 1,
        rate: 80,
        createdAt: new Date(),
        updatedAt: new Date(),
      }, {
        postId: 1,
        beanId: 2,
        rate: 10,
        createdAt: new Date(),
        updatedAt: new Date(),
      }, {
        postId: 1,
        beanId: 3,
        rate: 10,
        createdAt: new Date(),
        updatedAt: new Date(),
      }, {
        postId: 2,
        beanId: 4,
        rate: 70,
        createdAt: new Date(),
        updatedAt: new Date(),
      }, {
        postId: 2,
        beanId: 5,
        rate: 10,
        createdAt: new Date(),
        updatedAt: new Date(),
      }, {
        postId: 2,
        beanId: 6,
        rate: 20,
        createdAt: new Date(),
        updatedAt: new Date(),
      }, {
        postId: 3,
        beanId: 7,
        rate: 40,
        createdAt: new Date(),
        updatedAt: new Date(),
      }, {
        postId: 3,
        beanId: 8,
        rate: 30,
        createdAt: new Date(),
        updatedAt: new Date(),
      }, {
        postId: 3,
        beanId: 9,
        rate: 30,
        createdAt: new Date(),
        updatedAt: new Date(),
      }, {
        postId: 4,
        beanId: 10,
        rate: 60,
        createdAt: new Date(),
        updatedAt: new Date(),
      }, {
        postId: 4,
        beanId: 11,
        rate: 20,
        createdAt: new Date(),
        updatedAt: new Date(),
      }, {
        postId: 4,
        beanId: 12,
        rate: 20,
        createdAt: new Date(),
        updatedAt: new Date(),
      }, {
        postId: 5,
        beanId: 13,
        rate: 15,
        createdAt: new Date(),
        updatedAt: new Date(),
      }, {
        postId: 5,
        beanId: 14,
        rate: 70,
        createdAt: new Date(),
        updatedAt: new Date(),
      }, {
        postId: 5,
        beanId: 15,
        rate: 15,
        createdAt: new Date(),
        updatedAt: new Date(),
      }, {
        postId: 6,
        beanId: 16,
        rate: 35,
        createdAt: new Date(),
        updatedAt: new Date(),
      }, {
        postId: 6,
        beanId: 17,
        rate: 30,
        createdAt: new Date(),
        updatedAt: new Date(),
      }, {
        postId: 6,
        beanId: 18,
        rate: 35,
        createdAt: new Date(),
        updatedAt: new Date(),
      }, {
        postId: 7,
        beanId: 19,
        rate: 30,
        createdAt: new Date(),
        updatedAt: new Date(),
      }, {
        postId: 7,
        beanId: 20,
        rate: 35,
        createdAt: new Date(),
        updatedAt: new Date(),
      }, {
        postId: 7,
        beanId: 21,
        rate: 35,
        createdAt: new Date(),
        updatedAt: new Date(),
      }, {
        postId: 8,
        beanId: 22,
        rate: 45,
        createdAt: new Date(),
        updatedAt: new Date(),
      }, {
        postId: 8,
        beanId: 23,
        rate: 10,
        createdAt: new Date(),
        updatedAt: new Date(),
      }, {
        postId: 8,
        beanId: 24,
        rate: 45,
        createdAt: new Date(),
        updatedAt: new Date(),
      }, {
        postId: 9,
        beanId: 25,
        rate: 10,
        createdAt: new Date(),
        updatedAt: new Date(),
      }, {
        postId: 9,
        beanId: 1,
        rate: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
      }, {
        postId: 9,
        beanId: 2,
        rate: 85,
        createdAt: new Date(),
        updatedAt: new Date(),
      }, {
        postId: 10,
        beanId: 3,
        rate: 55,
        createdAt: new Date(),
        updatedAt: new Date(),
      }, {
        postId: 10,
        beanId: 4,
        rate: 30,
        createdAt: new Date(),
        updatedAt: new Date(),
      }, {
        postId: 10,
        beanId: 5,
        rate: 15,
        createdAt: new Date(),
        updatedAt: new Date(),
      }, {
        postId: 11,
        beanId: 6,
        rate: 25,
        createdAt: new Date(),
        updatedAt: new Date(),
      }, {
        postId: 11,
        beanId: 7,
        rate: 10,
        createdAt: new Date(),
        updatedAt: new Date(),
      }, {
        postId: 11,
        beanId: 8,
        rate: 65,
        createdAt: new Date(),
        updatedAt: new Date(),
      }, {
        postId: 12,
        beanId: 9,
        rate: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
      }, {
        postId: 12,
        beanId: 10,
        rate: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
      }, {
        postId: 12,
        beanId: 11,
        rate: 90,
        createdAt: new Date(),
        updatedAt: new Date(),
      }, {
        postId: 13,
        beanId: 12,
        rate: 60,
        createdAt: new Date(),
        updatedAt: new Date(),
      }, {
        postId: 13,
        beanId: 13,
        rate: 30,
        createdAt: new Date(),
        updatedAt: new Date(),
      }, {
        postId: 13,
        beanId: 14,
        rate: 10,
        createdAt: new Date(),
        updatedAt: new Date(),
      }, {
        postId: 14,
        beanId: 15,
        rate: 45,
        createdAt: new Date(),
        updatedAt: new Date(),
      }, {
        postId: 14,
        beanId: 16,
        rate: 45,
        createdAt: new Date(),
        updatedAt: new Date(),
      }, {
        postId: 14,
        beanId: 17,
        rate: 10,
        createdAt: new Date(),
        updatedAt: new Date(),
      }, {
        postId: 15,
        beanId: 18,
        rate: 10,
        createdAt: new Date(),
        updatedAt: new Date(),
      }, {
        postId: 15,
        beanId: 19,
        rate: 60,
        createdAt: new Date(),
        updatedAt: new Date(),
      }, {
        postId: 15,
        beanId: 20,
        rate: 30,
        createdAt: new Date(),
        updatedAt: new Date(),
      }, {
        postId: 16,
        beanId: 21,
        rate: 40,
        createdAt: new Date(),
        updatedAt: new Date(),
      }, {
        postId: 16,
        beanId: 22,
        rate: 20,
        createdAt: new Date(),
        updatedAt: new Date(),
      }, {
        postId: 16,
        beanId: 23,
        rate: 40,
        createdAt: new Date(),
        updatedAt: new Date(),
      }, {
        postId: 17,
        beanId: 24,
        rate: 20,
        createdAt: new Date(),
        updatedAt: new Date(),
      }, {
        postId: 17,
        beanId: 25,
        rate: 40,
        createdAt: new Date(),
        updatedAt: new Date(),
      }, {
        postId: 17,
        beanId: 1,
        rate: 40,
        createdAt: new Date(),
        updatedAt: new Date(),
      }, {
        postId: 18,
        beanId: 2,
        rate: 50,
        createdAt: new Date(),
        updatedAt: new Date(),
      }, {
        postId: 18,
        beanId: 3,
        rate: 25,
        createdAt: new Date(),
        updatedAt: new Date(),
      }, {
        postId: 18,
        beanId: 4,
        rate: 25,
        createdAt: new Date(),
        updatedAt: new Date(),
      }, {
        postId: 19,
        beanId: 5,
        rate: 30,
        createdAt: new Date(),
        updatedAt: new Date(),
      }, {
        postId: 19,
        beanId: 6,
        rate: 40,
        createdAt: new Date(),
        updatedAt: new Date(),
      }, {
        postId: 19,
        beanId: 7,
        rate: 30,
        createdAt: new Date(),
        updatedAt: new Date(),
      }, {
        postId: 20,
        beanId: 8,
        rate: 40,
        createdAt: new Date(),
        updatedAt: new Date(),
      }, {
        postId: 20,
        beanId: 9,
        rate: 40,
        createdAt: new Date(),
        updatedAt: new Date(),
      }, {
        postId: 20,
        beanId: 10,
        rate: 20,
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

    return queryInterface.bulkDelete('postBeans', null, {});
  }
};
