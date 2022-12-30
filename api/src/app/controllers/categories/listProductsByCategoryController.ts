import {Request, Response} from 'express';
import {Product} from '../../models/ProductModel';

export async function listProductsByCategoryController(req: Request, res: Response) {
  const { categoryId } = req.params;

  const product = await Product.find().where('category').equals(categoryId);

  res.json(product);
}
