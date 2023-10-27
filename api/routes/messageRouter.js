import express from 'express';
import { createMessage, getMessages } from '../controllers/messageController.js';
import { verifyUser } from '../middlewares/userVerify.js';
const router = express.Router();



// user routes
router.post('/', verifyUser, createMessage);
router.get('/:id', verifyUser, getMessages);




// router export
export default router;
