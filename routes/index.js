const express = require('express');
const router = express.Router();
const { postValidator, putValidator } = require('../middlewares/validator');
const cache = require('../middlewares/cache');

const {
  getOrders,
  getOrderById,
  postOrder,
  updateOrderById,
  deleteOrderById,
  deleteOrders,
} = require('../controllers');

router.get('/', cache('1 day'), getOrders);
router.get('/:id', cache('1 day'), getOrderById);
router.post('/', postValidator, postOrder);
router.put('/:id', putValidator, updateOrderById);
router.delete('/:id', deleteOrderById);
router.delete('/', deleteOrders);

module.exports = router;
