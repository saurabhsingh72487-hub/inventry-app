const express = require("express");
const router = express.Router();
const ctrl = require("../controllers/publisherController");
const admin = require("../middleware/adminAuth");

router.get("/", ctrl.getPublishers);
router.post("/", ctrl.createPublisher);
router.delete("/:id", admin, ctrl.deletePublisher);

module.exports = router;