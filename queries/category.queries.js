const db = require("../db.js");

const Category = db.categories;

const getCategories = async (req, res) => {
  try {
    const categories = await Category.findAll();
    res.json(categories);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const createCategory = async (req, res) => {
  try {
    const category = await Category.create(req.body);
    res.json(category);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const removeCategory = async (req, res) => {
  try {
    const id = +req.params.id;
    const category = await Category.destroy({ where: { id } });
    res.json(category);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

module.exports = {
    getCategories,
    createCategory,
    removeCategory
};
