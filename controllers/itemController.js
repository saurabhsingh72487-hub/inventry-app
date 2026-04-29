const Item = require("../models/Item");

exports.getItems = async (req, res) => {
  const items = await Item.find().populate("publisher categories");
  res.json(items);
};

exports.getItem = async (req, res) => {
  const item = await Item.findById(req.params.id).populate("publisher categories");
  res.json(item);
};

exports.createItem = async (req, res) => {
  const item = new Item(req.body);
  await item.save();
  res.json(item);
};

exports.updateItem = async (req, res) => {
  const item = await Item.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(item);
};

exports.deleteItem = async (req, res) => {
  await Item.findByIdAndDelete(req.params.id);
  res.json({ msg: "Item deleted" });
};