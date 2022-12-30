import {Router} from 'express';
import {listCategoriesController} from './app/controllers/categories/listCategoriesController';
import {createCategoriesController} from './app/controllers/categories/createCategoriesController';

export const router = Router();

router.get('/categories', listCategoriesController);
router.post('/categories', createCategoriesController);
