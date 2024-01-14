const express = require("express");
const router = express.Router();
const samosaController = require("../controller/Samosa");

router.post("/samosa/new", samosaController.postSamosa);
router.get("/samosaList", samosaController.samosaList);

module.exports = router
