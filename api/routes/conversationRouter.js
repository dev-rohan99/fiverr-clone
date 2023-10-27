import express from 'express';
import { createConversation, getConversations, getSingleConversation, updateConversation } from '../controllers/conversationController.js';
import { verifyUser } from '../middlewares/userVerify.js';
const router = express.Router();



// user routes
router.get('/', verifyUser, getConversations);
router.post('/', verifyUser, createConversation);
router.put('/:id', verifyUser, updateConversation);
router.get('/:id', verifyUser, getSingleConversation);



// router export
export default router;
