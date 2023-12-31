'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.removeColumn('Posts', 'timestamp');
    await queryInterface.removeColumn('UserInteractions', 'timestamp');
    await queryInterface.removeColumn('UserPostInteractions', 'timestamp');
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.addColumn('Posts', 'timestamp', {
      type: Sequelize.DATE,
    });
    await queryInterface.addColumn('UserInteractions', 'timestamp', {
      type: Sequelize.DATE,
    });
    await queryInterface.addColumn('UserPostInteractions', 'timestamp', {
      type: Sequelize.DATE,
    });
    await queryInterface.sequelize.query(
      'UPDATE "Posts" SET "timestamp" = "createdAt";'
    );
    await queryInterface.sequelize.query(
      'UPDATE "UserInteractions" SET "timestamp" = "createdAt";'
    );
    await queryInterface.sequelize.query(
      'UPDATE "UserPostInteractions" SET "timestamp" = "createdAt";'
    );
    await queryInterface.changeColumn('Posts', 'timestamp', {
      allowNull: false,
      defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
    });
    await queryInterface.changeColumn('UserInteractions', 'timestamp', {
      allowNull: false,
      defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
    });
    await queryInterface.changeColumn('UserPostInteractions', 'timestamp', {
      allowNull: false,
      defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
    });
  }
};
