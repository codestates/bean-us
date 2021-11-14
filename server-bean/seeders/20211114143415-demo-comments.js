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
    
    return queryInterface.bulkInsert('postComments', [
      {
        comments: 'comment',
        postId: 1,
        userId: 'test2',
        createdAt: new Date(),
        updatedAt: new Date(),
      }, {
        comments: 'comment',
        postId: 2,
        userId: 'test3',
        createdAt: new Date(),
        updatedAt: new Date(),
      }, {
        comments: 'comment',
        postId: 3,
        userId: 'test3',
        createdAt: new Date(),
        updatedAt: new Date(),
      }, {
        comments: 'comment',
        postId: 1,
        userId: 'test2',
        createdAt: new Date(),
        updatedAt: new Date(),
      }, {
        comments: 'comment',
        postId: 2,
        userId: 'test3',
        createdAt: new Date(),
        updatedAt: new Date(),
      }, {
        comments: 'comment',
        postId: 3,
        userId: 'test3',
        createdAt: new Date(),
        updatedAt: new Date(),
      }, {
        comments: 'comment',
        postId: 1,
        userId: 'test2',
        createdAt: new Date(),
        updatedAt: new Date(),
      }, {
        comments: 'comment',
        postId: 2,
        userId: 'test3',
        createdAt: new Date(),
        updatedAt: new Date(),
      }, {
        comments: 'comment',
        postId: 3,
        userId: 'test3',
        createdAt: new Date(),
        updatedAt: new Date(),
      }, {
        comments: 'comment',
        postId: 1,
        userId: 'test2',
        createdAt: new Date(),
        updatedAt: new Date(),
      }, {
        comments: 'comment',
        postId: 2,
        userId: 'test3',
        createdAt: new Date(),
        updatedAt: new Date(),
      }, {
        comments: 'comment',
        postId: 3,
        userId: 'test3',
        createdAt: new Date(),
        updatedAt: new Date(),
      }, {
        comments: 'comment',
        postId: 1,
        userId: 'test2',
        createdAt: new Date(),
        updatedAt: new Date(),
      }, {
        comments: 'comment',
        postId: 2,
        userId: 'test3',
        createdAt: new Date(),
        updatedAt: new Date(),
      }, {
        comments: 'comment',
        postId: 3,
        userId: 'test3',
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

    return queryInterface.bulkDelete('postComments', null, {});
  }
};
