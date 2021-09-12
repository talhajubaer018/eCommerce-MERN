import express from 'express'

import { addOrderItems, getOrderById, updateOrderToPaid, getMyOrder, getOrders, updateOrderToDeilvered } from '../controller/orderController.js'
import { protect,admin } from '../middleware/authMiddleware.js'

const router = express.Router()

router
  .route('/')
  .post(protect, addOrderItems)
  .get(protect, admin, getOrders)

router
  .route('/myorders')
  .get(protect, getMyOrder)

router
  .route('/:id')
  .get(protect, getOrderById)

router
  .route('/:id/pay')
  .put(protect, updateOrderToPaid)

router
  .route('/:id/deliver')
  .put(protect, admin, updateOrderToDeilvered)



export default router