const express = require('express');
const postcontroller = require('../controllers/post.controller');

const router = express.Router();

router.post("/", postcontroller.save);
router.get("/:id", postcontroller.show);
router.get("/", postcontroller.index);
router.patch("/:id", postcontroller.update);
router.delete("/:id", postcontroller.destroy);

module.exports = router;