const express = require('express');
const logicalController = require('../controllers/logicalController');
const router = express.Router();

router.get('/and', logicalController.and);
router.get('/not', logicalController.not);
router.get('/nor', logicalController.nor);
router.get('/or', logicalController.or);

router.get('/getproduct', logicalController.getProduct);
router.post('/addproduct', logicalController.addProduct);

module.exports = router;