const db = require("../db.js");

const Company = db.companies;

const getCompanies = async (req, res) => {
  try {
    const companies = await Company.findAll();
    res.json(companies);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const createCompany = async (req, res) => {
  try {
    const company = await Company.create(req.body);
    res.json(company);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const removeCompany = async (req, res) => {
  try {
    const id = +req.params.id;
    const company = await Company.destroy({ where: { id } });
    res.json(company);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

const patchCompany = async (req, res) => {
  try {
    const id = +req.params.id;
    const company = await Company.update(req.body, { where: { id } });
    res.json(company);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

const getCompany =  async (req, res) => {
  try {
    const id = +req.params.id;
    const company = await Company.findByPk(id);
    res.json(company);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

module.exports = {
    getCompanies,
    createCompany,
    removeCompany,
    patchCompany,
    getCompany
};
