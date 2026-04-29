require("dotenv").config();
const express = require("express");
const connectDB = require("./config/db.js");

const app = express();
connectDB();

app.use(express.json());

app.use("/items", require("./routes/itemRoutes"));
app.use("/categories", require("./routes/categoryRoutes"));
app.use("/publishers", require("./routes/publisherRoutes"));

app.get("/", (req, res) => {
  res.send("Inventory API Running");
});

app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});