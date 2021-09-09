import asyncHandler from 'express-async-handler'

import Product from '../models/productModel.js'
import Order from '../models/orderModel.js'

//@desc       Create new order
//@route      POST /api/orders
//@access     public
const addOrderItems = asyncHandler( async(req, res) => {
  const { orderItems, shippingAddress, paymentMethod, itemsPrice, shippingPrice, texPrice, totalPrice } = req.body

  if(orderItems && orderItems.length === 0) {
    res.status(400)
    throw new Error ('No order Items')
    return
  }
  else {
    const order = new Order({
      orderItems,
      user: req.user._id,
      shippingAddress,
      paymentMethod,
      itemsPrice,
      shippingPrice,
      texPrice,
      totalPrice
    })

    const createdOrder = await order.save()

    res.status(201).json(createdOrder)
  }

})

export { addOrderItems }