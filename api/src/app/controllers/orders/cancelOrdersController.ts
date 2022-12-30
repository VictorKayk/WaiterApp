import {Request, Response} from 'express';
import {Order} from '../../models/OrderModel';

export async function cancelOrdersController(req: Request, res: Response) {
  const { orderId } = req.params;

  await Order.findByIdAndDelete(orderId, {  });
  res.sendStatus(204);
}
