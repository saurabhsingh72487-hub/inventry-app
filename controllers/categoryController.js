const Category = require("../models/Category");
const Item = require("../models/Item");

exports.getCategories = async (req, res) => {
  const categories = await Category.find();
  res.json(categories);
};

exports.createCategory = async (req, res) => {
  const category = new Category(req.body);
  await category.save();
  res.json(category);
};

exports.deleteCategory = async (req, res) => {
  const items = await Item.find({ categories: req.params.id });

  if (items.length > 0) {
    return res.status(400).json({ msg: "Category has items, cannot delete" });
  }

  await Category.findByIdAndDelete(req.params.id);
  res.json({ msg: "Category deleted" });
};