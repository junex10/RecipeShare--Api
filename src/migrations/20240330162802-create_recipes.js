'use strict';

const constants = require('./../seeders/constants');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.createTable('recipes', {
      id: constants.PRIMARY_KEY,
      user_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { 
          model: 'users',
          key: 'id'
        }
      },
      cooking_time_type: {
        type: Sequelize.INTEGER,
        allowNull: false,
        default: 0 // Minutes
      },
      cooking_time: {
        type: Sequelize.STRING,
        allowNull: false,
        default: '0'
      },
      difficulty: {
        type: Sequelize.INTEGER,
        allowNull: false,
        default: 0 // Easy
      },
      prep_time_type: {
        type: Sequelize.INTEGER,
        allowNull: false,
        default: 0 // Minutes
      },
      prep_time: {
        type: Sequelize.STRING,
        allowNull: false,
        default: '0'
      },
      meal_people: {
        type: Sequelize.INTEGER,
        allowNull: false,
        default: 1 // People who will serve
      },
      ...constants.DATES_CONTROL
    });
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.dropTable('recipes');
  }
};
