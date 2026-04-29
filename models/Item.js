const mongoose = require("mongoose");

const ItemSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: String,
  price: Number,
  stock: Number,
  publisher: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Publisher"
  },
  categories: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category"
    }
  ]
});

module.exports = mongoose.model("Item", ItemSchema);