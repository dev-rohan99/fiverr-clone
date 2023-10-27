import express from 'express';
import { createOrder, getOrders } from '../controllers/orderController.js';
import { verifyUser } from '../middlewares/userVerify.js';
const router = express.Router();



// user routes
router.post('/:gigId', verifyUser, createOrder);
router.get('/', verifyUser, getOrders);




// router export
export default router;
