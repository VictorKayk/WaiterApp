import {Request, Response} from 'express';
import {Product} from '../../models/ProductModel';

export async function createProductsController(req: Request, res: Response) {
  const { name, price, description, category, ingredients } = req.body;
  const imagePath = req.file?.filename;

  const product = await Product.create({
    name,
    price,
    description,
    imagePath,
    category,
    ingredients: ingredients ? JSON.parse(ingredients) : [],
  });

  res.status(201).json(product);
}
