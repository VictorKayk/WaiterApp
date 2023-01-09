import {Request, Response} from 'express';
import {Order} from '../../models/OrderModel';
import {io} from '../../../index';

export async function createOrdersController(req: Request, res: Response) {
  const { table, products } = req.body;

  const order = await Order.create({ table, products });
  const orderDetails = await order.populate('products.product');

  io.emit('order@new', orderDetails);

  res.status(201).json(order);
}
