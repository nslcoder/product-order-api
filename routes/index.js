const express = require('express');
const router = express.Router();

const { getOrders, getOrderById, postOrder } = require('../controllers');

router.get('/', getOrders);
router.get('/:id', getOrderById);
router.post('/', postOrder);
/* router.put('/:id', updateOrderById);
router.delete('/:id', deleteOrderById);
router.delete('/', deleteOrders); */

module.exports = router;
