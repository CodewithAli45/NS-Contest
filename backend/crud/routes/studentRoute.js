const express = require('express');

const { paginate, sort } = require('../controller/studentController');

const router = express.Router();

router.get('/paginate', paginate);
router.get('/sort', sort);

module.exports = router;