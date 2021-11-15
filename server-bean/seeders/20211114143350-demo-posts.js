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
          title: 'title1',
          content: 'content1',
          water: 500,
          waterTemp: 60,
          userId: 'test1',
          createdAt: new Date(),
          updatedAt: new Date(),
        }, {
          title: 'title2',
          content: 'content2',
          water: 500,
          waterTemp: 60,
          userId: 'test2',
          createdAt: new Date(),
          updatedAt: new Date(),
        }, {
          title: 'title3',
          content: 'content3',
          water: 500,
          waterTemp: 60,
          userId: 'test3',
          createdAt: new Date(),
          updatedAt: new Date(),
        }, {
          title: 'title4',
          content: 'content4',
          water: 500,
          waterTemp: 60,
          userId: 'test4',
          createdAt: new Date(),
          updatedAt: new Date(),
        }, {
          title: 'title5',
          content: 'content5',
          water: 500,
          waterTemp: 60,
          userId: 'test5',
          createdAt: new Date(),
          updatedAt: new Date(),
        }, {
          title: 'title6',
          content: 'content6',
          water: 500,
          waterTemp: 60,
          userId: 'test6',
          createdAt: new Date(),
          updatedAt: new Date(),
        }, {
          title: 'title7',
          content: 'content7',
          water: 500,
          waterTemp: 60,
          userId: 'test7',
          createdAt: new Date(),
          updatedAt: new Date(),
        }, {
          title: 'title8',
          content: 'content8',
          water: 500,
          waterTemp: 60,
          userId: 'test8',
          createdAt: new Date(),
          updatedAt: new Date(),
        }, {
          title: 'title9',
          content: 'content9',
          water: 500,
          waterTemp: 60,
          userId: 'test9',
          createdAt: new Date(),
          updatedAt: new Date(),
        }, {
          title: 'title10',
          content: 'content10',
          water: 500,
          waterTemp: 60,
          userId: 'test10',
          createdAt: new Date(),
          updatedAt: new Date(),
        }, {
          title: 'title11',
          content: 'content11',
          water: 500,
          waterTemp: 60,
          userId: 'test1',
          createdAt: new Date(),
          updatedAt: new Date(),
        }, {
          title: 'title12',
          content: 'content12',
          water: 500,
          waterTemp: 60,
          userId: 'test1',
          createdAt: new Date(),
          updatedAt: new Date(),
        }, {
          title: 'title13',
          content: 'content13',
          water: 500,
          waterTemp: 60,
          userId: 'test3',
          createdAt: new Date(),
          updatedAt: new Date(),
        }, {
          title: 'title14',
          content: 'content14',
          water: 500,
          waterTemp: 60,
          userId: 'test15',
          createdAt: new Date(),
          updatedAt: new Date(),
        }, {
          title: 'title15',
          content: 'content15',
          water: 500,
          waterTemp: 60,
          userId: 'test4',
          createdAt: new Date(),
          updatedAt: new Date(),
        }, {
          title: 'title16',
          content: 'content16',
          water: 500,
          waterTemp: 60,
          userId: 'test3',
          createdAt: new Date(),
          updatedAt: new Date(),
        }, {
          title: 'title17',
          content: 'content17',
          water: 500,
          waterTemp: 60,
          userId: 'test4',
          createdAt: new Date(),
          updatedAt: new Date(),
        }, {
          title: 'title18',
          content: 'content18',
          water: 500,
          waterTemp: 60,
          userId: 'test1',
          createdAt: new Date(),
          updatedAt: new Date(),
        }, {
          title: 'title19',
          content: 'content19',
          water: 500,
          waterTemp: 60,
          userId: 'test12',
          createdAt: new Date(),
          updatedAt: new Date(),
        }, {
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

    return queryInterface.bulkDelete('posts', null, {});
  }
};
