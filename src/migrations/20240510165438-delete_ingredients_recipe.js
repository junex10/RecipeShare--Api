'use strict';
const constants = require('../seeders/constants');
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.dropTable('ingredients_recipe');
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.createTable('ingredients_recipe', {
      id: constants.PRIMARY_KEY,
      recipe_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { 
          model: 'recipes',
          key: 'id'
        }
      },
      ingredient_description: {
        type: Sequelize.STRING,
        allowNull: false
      },
      ...constants.DATES_CONTROL
    });
  }
};
