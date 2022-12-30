import {Request, Response} from 'express';
import {Order} from '../../models/OrderModel';

export async function changeOrderStatusController(req: Request, res: Response) {
  const { orderId } = req.params;
  const { status } = req.body;

  if(!['WAITING', 'IN_PRODUCTION', 'DONE'].includes(status)) return res.status(400).json({ error: 'Status should be one of this: WAITING, IN_PRODUCTION, DONE' });

  await Order.findByIdAndUpdate(orderId, { status });
  return res.sendStatus(204);
}
