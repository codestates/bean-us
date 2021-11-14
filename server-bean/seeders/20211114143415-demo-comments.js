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
        comments: 'comment',
        postId: 1,
        userId: 'test2',
        createdAt: new Date(),
        updatedAt: new Date(),
      }, {
        commentId: 2,
        comments: 'comment',
        postId: 2,
        userId: 'test3',
        createdAt: new Date(),
        updatedAt: new Date(),
      }, {
        commentId: 3,
        comments: 'comment',
        postId: 3,
        userId: 'test3',
        createdAt: new Date(),
        updatedAt: new Date(),
      }, {
        commentId: 4,
        comments: 'comment',
        postId: 1,
        userId: 'test2',
        createdAt: new Date(),
        updatedAt: new Date(),
      }, {
        commentId: 5,
        comments: 'comment',
        postId: 2,
        userId: 'test3',
        createdAt: new Date(),
        updatedAt: new Date(),
      }, {
        commentId: 6,
        comments: 'comment',
        postId: 3,
        userId: 'test3',
        createdAt: new Date(),
        updatedAt: new Date(),
      }, {
        commentId: 7,
        comments: 'comment',
        postId: 1,
        userId: 'test2',
        createdAt: new Date(),
        updatedAt: new Date(),
      }, {
        commentId: 8,
        comments: 'comment',
        postId: 2,
        userId: 'test3',
        createdAt: new Date(),
        updatedAt: new Date(),
      }, {
        commentId: 9,
        comments: 'comment',
        postId: 3,
        userId: 'test3',
        createdAt: new Date(),
        updatedAt: new Date(),
      }, {
        commentId: 10,
        comments: 'comment',
        postId: 1,
        userId: 'test2',
        createdAt: new Date(),
        updatedAt: new Date(),
      }, {
        commentId: 11,
        comments: 'comment',
        postId: 2,
        userId: 'test3',
        createdAt: new Date(),
        updatedAt: new Date(),
      }, {
        commentId: 12,
        comments: 'comment',
        postId: 3,
        userId: 'test3',
        createdAt: new Date(),
        updatedAt: new Date(),
      }, {
        commentId: 13,
        comments: 'comment',
        postId: 1,
        userId: 'test2',
        createdAt: new Date(),
        updatedAt: new Date(),
      }, {
        commentId: 14,
        comments: 'comment',
        postId: 2,
        userId: 'test3',
        createdAt: new Date(),
        updatedAt: new Date(),
      }, {
        commentId: 15,
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
  }
};
