const express = require('express');
const testcontroller = require('../controllers/test.controller');

const router = express.Router();

router.get("/", testcontroller.test)

module.exports = router;