const express = require("express");
const router = express.Router();
const { index, users } = require("../controllers/default.controllers");



/**
 * @Params {GET}
 */
router.get("/", index);

// 
router.get("/user", users);


module.exports = router;