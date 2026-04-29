const Publisher = require("../models/Publisher");
const Item = require("../models/Item");

exports.getPublishers = async (req, res) => {
  const publishers = await Publisher.find();
  res.json(publishers);
};

exports.createPublisher = async (req, res) => {
  const publisher = new Publisher(req.body);
  await publisher.save();
  res.json(publisher);
};

exports.deletePublisher = async (req, res) => {
  const items = await Item.find({ publisher: req.params.id });

  if (items.length > 0) {
    return res.status(400).json({ msg: "Publisher has items" });
  }

  await Publisher.findByIdAndDelete(req.params.id);
  res.json({ msg: "Publisher deleted" });
};