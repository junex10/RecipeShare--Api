'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return Promise.all([
      queryInterface.addColumn(
        'recipes',
        'description',
        {
          type: Sequelize.TEXT,
          after: 'name'
        }
      ),
    ]);
  },

  async down (queryInterface, Sequelize) {
   return Promise.all([
    queryInterface.removeColumn('recipes', 'description')
   ])
  }
};