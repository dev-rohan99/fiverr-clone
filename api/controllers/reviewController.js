import gigModel from "../models/gigModel.js";
import reviewModel from "../models/reviewModel.js";
import createError from "../utility/createError.js"


/**
 * create new review
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 * @returns 
 */

export const createNewReview = async (req, res, next) => {

    if(req.isSeller) return next(createError(403, "Only buyer can create review!"));

    try{
        
        const newReview = new reviewModel({
            ...req.body,
            userId : req.userId,
            gigId : req.body.gigId
        });

        const review = await reviewModel.findOne({
            gigId : req.body.gigId,
            userId : req.userId,
        });

        if(review) return next(createError(403, "You have already created a review for this gig!"));

        await newReview.save();

        await gigModel.findByIdAndUpdate(req.body.gigId, {
            $inc : { reviewStar : req.body.reviewNumb, totalReviews : 1 }
        });

        res.status(201).json({
            review : newReview
        })

    }catch(err){
        next(err);
    }
}

export const getReviews = async (req, res, next) => {

    try{

        const reviews = await reviewModel.find({gigId : req.params.gigId});

        if(!reviews) return next(createError(404, "Not found"));

        res.status(200).json({
            reviews : reviews
        })

    }catch(err){
        next(err);
    }
}

