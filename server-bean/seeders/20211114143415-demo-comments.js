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
        commentId: 1,
        comment: 'comment',
        postId: 1,
        userId: 'test2',
        createdAt: new Date(),
        updatedAt: new Date(),
      }, {
        commentId: 2,
        comment: 'comment',
        postId: 2,
        userId: 'test3',
        createdAt: new Date(),
        updatedAt: new Date(),
      }, {
        commentId: 3,
        comment: 'comment',
        postId: 3,
        userId: 'test3',
        createdAt: new Date(),
        updatedAt: new Date(),
      }, {
        commentId: 4,
        comment: 'comment',
        postId: 1,
        userId: 'test2',
        createdAt: new Date(),
        updatedAt: new Date(),
      }, {
        commentId: 5,
        comment: 'comment',
        postId: 2,
        userId: 'test3',
        createdAt: new Date(),
        updatedAt: new Date(),
      }, {
        commentId: 6,
        comment: 'comment',
        postId: 3,
        userId: 'test3',
        createdAt: new Date(),
        updatedAt: new Date(),
      }, {
        commentId: 7,
        comment: 'comment',
        postId: 1,
        userId: 'test2',
        createdAt: new Date(),
        updatedAt: new Date(),
      }, {
        commentId: 8,
        comment: 'comment',
        postId: 2,
        userId: 'test3',
        createdAt: new Date(),
        updatedAt: new Date(),
      }, {
        commentId: 9,
        comment: 'comment',
        postId: 3,
        userId: 'test3',
        createdAt: new Date(),
        updatedAt: new Date(),
      }, {
        commentId: 10,
        comment: 'comment',
        postId: 1,
        userId: 'test2',
        createdAt: new Date(),
        updatedAt: new Date(),
      }, {
        commentId: 11,
        comment: 'comment',
        postId: 2,
        userId: 'test3',
        createdAt: new Date(),
        updatedAt: new Date(),
      }, {
        commentId: 12,
        comment: 'comment',
        postId: 3,
        userId: 'test3',
        createdAt: new Date(),
        updatedAt: new Date(),
      }, {
        commentId: 13,
        comment: 'comment',
        postId: 1,
        userId: 'test2',
        createdAt: new Date(),
        updatedAt: new Date(),
      }, {
        commentId: 14,
        comment: 'comment',
        postId: 2,
        userId: 'test3',
        createdAt: new Date(),
        updatedAt: new Date(),
      }, {
        commentId: 15,
        comment: 'comment',
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
