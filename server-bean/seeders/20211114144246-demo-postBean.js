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

    return queryInterface.bulkInsert('posts', [
      {
        postId: 1,
        beanId: 1,
        rate: 80
      }, {
        postId: 1,
        beanId: 2,
        rate: 10
      }, {
        postId: 1,
        beanId: 3,
        rate: 10
      }, {
        postId: 2,
        beanId: 4,
        rate: 70
      }, {
        postId: 2,
        beanId: 5,
        rate: 10
      }, {
        postId: 2,
        beanId: 6,
        rate: 20
      }, {
        postId: 3,
        beanId: 7,
        rate: 40
      }, {
        postId: 3,
        beanId: 8,
        rate: 30
      }, {
        postId: 3,
        beanId: 9,
        rate: 30
      }, {
        postId: 4,
        beanId: 10,
        rate: 60
      }, {
        postId: 4,
        beanId: 11,
        rate: 20
      }, {
        postId: 4,
        beanId: 12,
        rate: 20
      }, {
        postId: 5,
        beanId: 13,
        rate: 15
      }, {
        postId: 5,
        beanId: 14,
        rate: 70
      }, {
        postId: 5,
        beanId: 15,
        rate: 15
      }, {
        postId: 6,
        beanId: 16,
        rate: 35
      }, {
        postId: 6,
        beanId: 17,
        rate: 30
      }, {
        postId: 6,
        beanId: 18,
        rate: 35
      }, {
        postId: 7,
        beanId: 19,
        rate: 30
      }, {
        postId: 7,
        beanId: 20,
        rate: 35
      }, {
        postId: 7,
        beanId: 21,
        rate: 35
      }, {
        postId: 8,
        beanId: 22,
        rate: 45
      }, {
        postId: 8,
        beanId: 23,
        rate: 10
      }, {
        postId: 8,
        beanId: 24,
        rate: 45
      }, {
        postId: 9,
        beanId: 25,
        rate: 10
      }, {
        postId: 9,
        beanId: 1,
        rate: 5
      }, {
        postId: 9,
        beanId: 2,
        rate: 85
      }, {
        postId: 10,
        beanId: 3,
        rate: 55
      }, {
        postId: 10,
        beanId: 4,
        rate: 30
      }, {
        postId: 10,
        beanId: 5,
        rate: 15
      }, {
        postId: 11,
        beanId: 6,
        rate: 25
      }, {
        postId: 11,
        beanId: 7,
        rate: 10
      }, {
        postId: 11,
        beanId: 8,
        rate: 65
      }, {
        postId: 12,
        beanId: 9,
        rate: 5
      }, {
        postId: 12,
        beanId: 10,
        rate: 5
      }, {
        postId: 12,
        beanId: 11,
        rate: 90
      }, {
        postId: 13,
        beanId: 12,
        rate: 60
      }, {
        postId: 13,
        beanId: 13,
        rate: 30
      }, {
        postId: 13,
        beanId: 14,
        rate: 10
      }, {
        postId: 14,
        beanId: 15,
        rate: 45
      }, {
        postId: 14,
        beanId: 16,
        rate: 45
      }, {
        postId: 14,
        beanId: 17,
        rate: 10
      }, {
        postId: 15,
        beanId: 18,
        rate: 10
      }, {
        postId: 15,
        beanId: 19,
        rate: 60
      }, {
        postId: 15,
        beanId: 20,
        rate: 30
      }, {
        postId: 16,
        beanId: 21,
        rate: 40
      }, {
        postId: 16,
        beanId: 22,
        rate: 20
      }, {
        postId: 16,
        beanId: 23,
        rate: 40
      }, {
        postId: 17,
        beanId: 24,
        rate: 20
      }, {
        postId: 17,
        beanId: 25,
        rate: 40
      }, {
        postId: 17,
        beanId: 1,
        rate: 40
      }, {
        postId: 18,
        beanId: 2,
        rate: 50
      }, {
        postId: 18,
        beanId: 3,
        rate: 25
      }, {
        postId: 18,
        beanId: 4,
        rate: 25
      }, {
        postId: 19,
        beanId: 5,
        rate: 30
      }, {
        postId: 19,
        beanId: 6,
        rate: 40
      }, {
        postId: 19,
        beanId: 7,
        rate: 30
      }, {
        postId: 20,
        beanId: 8,
        rate: 40
      }, {
        postId: 20,
        beanId: 9,
        rate: 40
      }, {
        postId: 20,
        beanId: 10,
        rate: 20
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
  }
};
