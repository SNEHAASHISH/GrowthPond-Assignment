'use strict';

module.exports = {
    async up (queryInterface, Sequelize) {
        await queryInterface.createTable('conversations', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            content: {
                type: Sequelize.TEXT,
                allowNull: true
            },
            status: {
                type: Sequelize.STRING,
                allowNull: false,
                defaultValue: 'ongoing' // default status
            },
            chatbotId: {
                type: Sequelize.INTEGER,
                references: {
                    model: 'chatbots',
                    key: 'id'
                },
                allowNull: false
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE,
                defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE,
                defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
            }
        });
    },

    async down (queryInterface, Sequelize) {
        await queryInterface.dropTable('conversations');
    }
};
