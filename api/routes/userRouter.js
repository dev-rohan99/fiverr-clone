import express from 'express';
import { deleteAccount, getSingleUser } from '../controllers/userController.js';
import { verifyUser } from '../middlewares/userVerify.js';
const router = express.Router();


// user routes
router.delete('/account/delete/:id', verifyUser, deleteAccount);
router.get('/account/:id', getSingleUser);



// router export
export default router;
