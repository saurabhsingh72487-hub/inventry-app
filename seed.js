require("dotenv").config();
const mongoose = require("mongoose");
const Category = require("./models/Category");
const Publisher = require("./models/Publisher");
const Item = require("./models/Item");

mongoose.connect(process.env.MONGO_URI);

async function seed() {
  await Category.deleteMany();
  await Publisher.deleteMany();
  await Item.deleteMany();

  const cat = await Category.create({ name: "Strategy" });
  const pub = await Publisher.create({ name: "Stonemaier" });

  await Item.create({
    name: "Wingspan",
    price: 50,
    stock: 10,
    publisher: pub._id,
    categories: [cat._id]
  });

  console.log("Data seeded");
  process.exit();
}

seed();