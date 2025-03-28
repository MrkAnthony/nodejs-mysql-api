const express = require('express');
const postcontroller = require('../controllers/post.controller');

const router = express.Router();

router.post("/", postcontroller.save);

module.exports = router;