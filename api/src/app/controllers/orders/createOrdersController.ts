import {Request, Response} from 'express';
import {Order} from '../../models/OrderModel';

export async function createOrdersController(req: Request, res: Response) {
  const { table, products } = req.body;

  const product = await Order.create({ table, products });

  res.status(201).json(product);
}
