// Object relationship mapping (ORM) with Sequelize
// It is used for mapping the database tables to the objects in the application
const { Sequelize } = require('sequelize');

// Instanciate Sequelize
const sequelize = new Sequelize("mini_social_economy", "root", "", {
    host: "localhost",
    dialect: "mariadb"
});

// Test the connection with IIFE (Immediately Invoked Function Expression)
(async () => {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
})();

const db = {};

// Access to Sequelize library
db.Sequelize = Sequelize;
// Access to instance of the connection
db.sequelize = sequelize;

// Import the model from the file and pass the connection and Sequelize
db.categories = require('./models/category.model.js')(sequelize, Sequelize);
db.companies = require('./models/company.model.js')(sequelize, Sequelize);
db.employees = require('./models/employee.model.js')(sequelize, Sequelize);

// Export the db object
module.exports = db;
