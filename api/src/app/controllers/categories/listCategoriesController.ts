import {Request, Response} from 'express';
import {Category} from '../../models/CategoryModel';

export async function listCategoriesController(req: Request, res: Response) {
  const categories = await Category.find();
  console.log(categories);
  res.json(categories);
}
