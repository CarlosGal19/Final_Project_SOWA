const db = require("../db.js");

const Employee = db.employees;

const getEmployees = async (req, res) => {
  try {
    const employees = await Employee.findAll();
    res.json(employees);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const createEmployee = async (req, res) => {
  try {
    const employee = await Employee.create(req.body);
    res.json(employee);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const removeEmployee = async (req, res) => {
  try {
    const id = +req.params.id;
    const employee = await Employee.destroy({ where: { id } });
    res.json(employee);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

module.exports = {
    getEmployees,
    createEmployee,
    removeEmployee
};
