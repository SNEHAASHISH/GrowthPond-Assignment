'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    // Add endUserId column to Conversation table
    await queryInterface.addColumn('conversations', 'endUserId', {
      type: Sequelize.INTEGER,
      references: {
        model: 'endusers', // note: table names are usually plural and lowercase in sequelize
        key: 'id'
      },
      allowNull: false
    });

    // If you need to set default values or perform other data transformations, do it here.
  },

  async down(queryInterface, Sequelize) {
    // Remove the endUserId column
    await queryInterface.removeColumn('conversations', 'endUserId');
  }
};
