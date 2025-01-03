import {Router} from 'express'
import { create, deleteById, getAllProducts, getById, updateProduct } from '../controllers/products.controller.js';

const router = new Router();

router.get('/', getAllProducts);
router.get('/:id', getById);
router.put('/:id', updateProduct);
router.post('/create', create);
router.delete('/:id', deleteById);

export default router;