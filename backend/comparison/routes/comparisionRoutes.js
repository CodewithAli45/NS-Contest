const express = require('express');
const comparisionController = require('../controllers/comparisionController');
const router = express.Router();

router.post('/adduser', comparisionController.addUsers)

router.get('/eq', comparisionController.eq);
router.get('/gt', comparisionController.gt);
router.get('/gte', comparisionController.gte);
router.get('/lt', comparisionController.lt);
router.get('/lte', comparisionController.lte);
router.get('/in', comparisionController.inop);
router.get('/getuser', comparisionController.getUsers);

module.exports = router;