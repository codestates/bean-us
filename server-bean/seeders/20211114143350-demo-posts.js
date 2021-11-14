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
          title: 'title1',
          content: 'content1',
          water: 500,
          waterTemp: 60,
          userId: 'test1',
          createdAt: new Date(),
          updatedAt: new Date(),
        }, {
          postId: 2,
          title: 'title2',
          content: 'content2',
          water: 500,
          waterTemp: 60,
          userId: 'test2',
          createdAt: new Date(),
          updatedAt: new Date(),
        }, {
          postId: 3,
          title: 'title3',
          content: 'content3',
          water: 500,
          waterTemp: 60,
          userId: 'test3',
          createdAt: new Date(),
          updatedAt: new Date(),
        }, {
          postId: 4,
          title: 'title4',
          content: 'content4',
          water: 500,
          waterTemp: 60,
          userId: 'test4',
          createdAt: new Date(),
          updatedAt: new Date(),
        }, {
          postId: 5,
          title: 'title5',
          content: 'content5',
          water: 500,
          waterTemp: 60,
          userId: 'test5',
          createdAt: new Date(),
          updatedAt: new Date(),
        }, {
          postId: 6,
          title: 'title6',
          content: 'content6',
          water: 500,
          waterTemp: 60,
          userId: 'test6',
          createdAt: new Date(),
          updatedAt: new Date(),
        }, {
          postId: 7,
          title: 'title7',
          content: 'content7',
          water: 500,
          waterTemp: 60,
          userId: 'test7',
          createdAt: new Date(),
          updatedAt: new Date(),
        }, {
          postId: 8,
          title: 'title8',
          content: 'content8',
          water: 500,
          waterTemp: 60,
          userId: 'test8',
          createdAt: new Date(),
          updatedAt: new Date(),
        }, {
          postId: 9,
          title: 'title9',
          content: 'content9',
          water: 500,
          waterTemp: 60,
          userId: 'test9',
          createdAt: new Date(),
          updatedAt: new Date(),
        }, {
          postId: 10,
          title: 'title10',
          content: 'content10',
          water: 500,
          waterTemp: 60,
          userId: 'test10',
          createdAt: new Date(),
          updatedAt: new Date(),
        }, {
          postId: 11,
          title: 'title11',
          content: 'content11',
          water: 500,
          waterTemp: 60,
          userId: 'test1',
          createdAt: new Date(),
          updatedAt: new Date(),
        }, {
          postId: 12,
          title: 'title12',
          content: 'content12',
          water: 500,
          waterTemp: 60,
          userId: 'test1',
          createdAt: new Date(),
          updatedAt: new Date(),
        }, {
          postId: 13,
          title: 'title13',
          content: 'content13',
          water: 500,
          waterTemp: 60,
          userId: 'test3',
          createdAt: new Date(),
          updatedAt: new Date(),
        }, {
          postId: 14,
          title: 'title14',
          content: 'content14',
          water: 500,
          waterTemp: 60,
          userId: 'test15',
          createdAt: new Date(),
          updatedAt: new Date(),
        }, {
          postId: 15,
          title: 'title15',
          content: 'content15',
          water: 500,
          waterTemp: 60,
          userId: 'test4',
          createdAt: new Date(),
          updatedAt: new Date(),
        }, {
          postId: 16,
          title: 'title16',
          content: 'content16',
          water: 500,
          waterTemp: 60,
          userId: 'test3',
          createdAt: new Date(),
          updatedAt: new Date(),
        }, {
          postId: 17,
          title: 'title17',
          content: 'content17',
          water: 500,
          waterTemp: 60,
          userId: 'test4',
          createdAt: new Date(),
          updatedAt: new Date(),
        }, {
          postId: 18,
          title: 'title18',
          content: 'content18',
          water: 500,
          waterTemp: 60,
          userId: 'test1',
          createdAt: new Date(),
          updatedAt: new Date(),
        }, {
          postId: 19,
          title: 'title19',
          content: 'content19',
          water: 500,
          waterTemp: 60,
          userId: 'test12',
          createdAt: new Date(),
          updatedAt: new Date(),
        }, {
          postId: 20,
          title: 'title20',
          content: 'content20',
          water: 500,
          waterTemp: 60,
          userId: 'test1',
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
