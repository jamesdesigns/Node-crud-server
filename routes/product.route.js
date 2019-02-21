const express = require('express');
const router = express.Router();

// Require the controllers 
const product_controller = require('../controllers/product.controller');

// A simple test url to check all files are communicating correctly
router.get('/test', product_controller.test);

// Define router for all 6 endpoints
// router.get('/:id', product_controller.product_details);
router.get('/', product_controller.all);
router.get('/name/:name', product_controller.find_name);
router.get('/size/:size', product_controller.find_size);

router.post('/create', product_controller.product_create);
router.put('/:id/update', product_controller.product_update);
router.delete('/:id/delete', product_controller.product_delete);

module.exports = router;