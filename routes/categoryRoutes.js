const express = require("express");
const router = express.Router();
const ctrl = require("../controllers/categoryController");
const admin = require("../middleware/adminAuth");

router.get("/", ctrl.getCategories);
router.post("/", ctrl.createCategory);
router.delete("/:id", admin, ctrl.deleteCategory);

module.exports = router;