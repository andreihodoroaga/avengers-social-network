'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable("UserImages", {
      user_image_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      profile_picture_path: {
        type: Sequelize.STRING,
        allowNull: false
      },
      user_id: {
        type: Sequelize.INTEGER,
        references: { model: 'Users', key: 'user_id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
    });

    await queryInterface.changeColumn("Users", "profile_picture", {
      type: Sequelize.INTEGER,
      references: { model: 'UserImages', key: 'user_image_id' },
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.changeColumn("Users", "profile_picture", {
      type: Sequelize.STRING(250),
    });
    await queryInterface.dropTable("UserImages");
  }
};
