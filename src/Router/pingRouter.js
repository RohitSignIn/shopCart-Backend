const express = require("express");
const router = express.Router();
const { pingController } = require("../Controller/pingController");

router.get("/", pingController);

module.exports = router;
