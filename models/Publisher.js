const mongoose = require("mongoose");

const PublisherSchema = new mongoose.Schema({
  name: { type: String, required: true },
  country: String
});

module.exports = mongoose.model("Publisher", PublisherSchema);