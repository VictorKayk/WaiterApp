import {Request, Response} from 'express';
import {Category} from '../../models/CategoryModel';

export async function listCategoriesController(req: Request, res: Response) {
  const categories = await Category.find();
  res.json(categories);
}
