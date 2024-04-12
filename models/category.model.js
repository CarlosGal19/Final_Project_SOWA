module.exports = (sequelize, Sequelize) => {
    const Category = sequelize.define(
      "user",
      {
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
        },
        category: {
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
        tableName: "company_category",
      }
    );

    return Category;
  };