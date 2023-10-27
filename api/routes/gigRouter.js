import express from 'express';
import { createNewGig, deleteGig, getAllGigs, getGig } from '../controllers/gigController.js';
import { verifyUser } from '../middlewares/userVerify.js';
const router = express.Router();



// user routes
router.post("/create-new-gig", verifyUser, createNewGig);
router.get("/:id", getGig);
router.get("/", getAllGigs);
router.delete("/delete/:id", verifyUser, deleteGig);




// router export
export default router;
