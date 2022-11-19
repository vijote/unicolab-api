/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('CareerPaths', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.UUIDV4
      },
      name: {
        type: Sequelize.STRING
      },
    });
  },
  async down(queryInterface) {
    await queryInterface.dropTable('CareerPaths');
  }
};