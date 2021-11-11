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
      'userInfos', [
        {
          userId: 'test1',
          password: 'test1',
          email: 'test1@test.test',
          createdAt: new Date(),
          updatedAt: new Date(),
        }, {
          userId: 'test2',
          password: 'test2',
          email: 'test2@test.test',
          createdAt: new Date(),
          updatedAt: new Date(),
        }, {
          userId: 'test3',
          password: 'test3',
          email: 'test3@test.test',
          createdAt: new Date(),
          updatedAt: new Date(),
        }, {
          userId: 'test4',
          password: 'test4',
          email: 'test4@test.test',
          createdAt: new Date(),
          updatedAt: new Date(),
        }, {
          userId: 'test5',
          password: 'test5',
          email: 'test5@test.test',
          createdAt: new Date(),
          updatedAt: new Date(),
        }, {
          userId: 'test6',
          password: 'test6',
          email: 'test6@test.test',
          createdAt: new Date(),
          updatedAt: new Date(),
        }, {
          userId: 'test7',
          password: 'test7',
          email: 'test7@test.test',
          createdAt: new Date(),
          updatedAt: new Date(),
        }, {
          userId: 'test8',
          password: 'test8',
          email: 'test8@test.test',
          createdAt: new Date(),
          updatedAt: new Date(),
        }, {
          userId: 'test9',
          password: 'test9',
          email: 'test9@test.test',
          createdAt: new Date(),
          updatedAt: new Date(),
        }, {
          userId: 'test10',
          password: 'test10',
          email: 'test10@test.test',
          createdAt: new Date(),
          updatedAt: new Date(),
        }, {
          userId: 'test11',
          password: 'test11',
          email: 'test11@test.test',
          createdAt: new Date(),
          updatedAt: new Date(),
        }, {
          userId: 'test12',
          password: 'test12',
          email: 'test12@test.test',
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

      return queryInterface.bulkDelete('userInfos', null, {});
  }
};
