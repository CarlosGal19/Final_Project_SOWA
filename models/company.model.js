module.exports = (sequelize, Sequelize) => {
    const Company = sequelize.define(
      "company",
      {
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
        },
        name: {
          type: Sequelize.STRING,
        },
        company_category_id: {
          type: Sequelize.INTEGER,
        },
        description: {
          type: Sequelize.STRING,
        },
        company_address: {
          type: Sequelize.STRING,
        },
        number: {
          type: Sequelize.INTEGER,
        },
        email: {
          type: Sequelize.STRING,
        },
        created_at: {
          type: Sequelize.DATE,
          defaultValue: Sequelize.NOW,
        },
        updated_at: {
          type: Sequelize.DATE,
          defaultValue: Sequelize.NOW,
        },
        deleted_at: {
          type: Sequelize.DATE,
        },
      },
      {
        timestamps: false,
        freezeTableName: true,
        tableName: "company",
      }
    );

    return Company;
  };