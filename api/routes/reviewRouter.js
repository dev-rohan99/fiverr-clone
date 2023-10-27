import express from 'express';
import { createNewReview, getReviews } from '../controllers/reviewController.js';
import { verifyUser } from '../middlewares/userVerify.js';
const router = express.Router();



// user routes
router.post('/', verifyUser, createNewReview);
router.get('/:gigId', verifyUser, getReviews);




// router export
export default router;
