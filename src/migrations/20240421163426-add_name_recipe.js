'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return Promise.all([
      queryInterface.addColumn(
        'recipes',
        'name',
        {
          type: Sequelize.STRING,
          after: 'user_id',
          allowNull: false
        }
      ),
    ]);
  },

  async down (queryInterface, Sequelize) {
   return Promise.all([
    queryInterface.removeColumn('recipes', 'name')
   ])
  }
};