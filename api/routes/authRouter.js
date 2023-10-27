import express from 'express';
import { logOut, login, register } from '../controllers/authController.js';
const router = express.Router();



// user routes
router.post('/register', register);
router.post('/login', login);
router.post('/logout', logOut);




// router export
export default router;
