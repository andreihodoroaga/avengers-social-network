"use strict";
const { randUserName, randLastName, randFirstName, randPastDate, randWord, randNumber } = require("@ngneat/falso");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const data = new Array(10).fill().map(() => ({
      user_id: 1,
      text: randWord(),
      no_likes: randNumber({min: 0, max: 10}),
      no_bookmarks: randNumber({min: 0, max: 10}),
      no_reposts: randNumber({min: 0, max: 10}),
    }));

    await queryInterface.bulkInsert("Posts", data, {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
