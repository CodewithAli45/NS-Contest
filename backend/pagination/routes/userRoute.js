const express = require('express');

const { paginate, sort, findAndSort } = require('../controllers/userController');

const router = express.Router();

router.get('/paginate', paginate);
router.get('/sort', sort);
router.get('/findAndSort', findAndSort)

module.exports = router;