import { Router } from "express";
import { changeOrderStatus, orderHistory, placeOrder, trackOrder } from "../controllers/order.controller.js";
const router = new Router();

router.post('/place', placeOrder);
router.get('/track/:id', trackOrder);
router.put('/:id', changeOrderStatus);
router.get('/history', orderHistory);


export default router;
