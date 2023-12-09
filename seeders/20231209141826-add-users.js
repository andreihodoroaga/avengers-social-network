"use strict";
const { randUserName, randLastName, randFirstName, randPastDate, randWord } = require("@ngneat/falso");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const data = new Array(10).fill().map(() => ({
      username: randUserName(),
      first_name: randFirstName(),
      last_name: randLastName(),
      date_of_birth: randPastDate(),
      bio: randWord(),
      createdAt: new Date(),
      updatedAt: new Date(),
    }));

    await queryInterface.bulkInsert("Users", data, {});
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
