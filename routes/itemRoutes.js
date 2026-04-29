const express = require("express");
const router = express.Router();
const ctrl = require("../controllers/itemController");
const admin = require("../middleware/adminAuth");

router.get("/", ctrl.getItems);
router.get("/:id", ctrl.getItem);
router.post("/", ctrl.createItem);
router.put("/:id", admin, ctrl.updateItem);
router.delete("/:id", admin, ctrl.deleteItem);

module.exports = router;