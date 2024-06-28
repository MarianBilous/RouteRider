'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Parcels', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      address: {
        type: Sequelize.STRING
      },
      status: {
        type: Sequelize.STRING
      },
      latitude: {
        type: Sequelize.FLOAT
      },
      longitude: {
        type: Sequelize.FLOAT
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Parcels');
  }
};
