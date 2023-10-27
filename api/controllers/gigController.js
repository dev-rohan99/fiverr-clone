import gigModel from "../models/gigModel.js";
import createError from "../utility/createError.js"
import { gigCoverPhotoUpload, gigPhotosUpload } from "../utility/gigImageUpload.js";


/**
 * create new gig
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 * @returns 
 */

export const createNewGig = async (req, res, next) => {
    if(!req.isSeller) return next(createError(403, "Only sellers can create gigs!"));

    try{
        
        const gigCoverPhotoPath = await gigCoverPhotoUpload(req.body.gigCoverImg);
        const gigPhotosPath = await gigPhotosUpload(req.body.gigImgs);
        console.log(gigCoverPhotoPath, gigPhotosPath);
        const newGig = new gigModel({
            ...req.body,
            userId : req.userId,
            gigCoverImg : gigCoverPhotoPath,
            gigImgs : gigPhotosPath
        });

        await newGig.save();
        res.status(201).json({
            gig : newGig
        })

    }catch(err){
        next(err);
    }
}

/**
 * delete gig
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 * @returns 
 */

export const deleteGig = async (req, res, next) => {
    if(!req.isSeller) return next(createError(403, "Only sellers can delete gigs!"));

    try{
        
        const gig = await gigModel.findById(req.params.id);
        if(!gig) return next(createError(404, "Gig not found!"));
        if(gig.userId !== req.userId) return next(createError(403, "Only you can delete your gig!"));
        
        const gigDelete = await gigModel.findByIdAndDelete(req.params.id);

        if(gigDelete){
            res.status(200).json({
                message : "Your gig has been deleted!"
            });
        }

    }catch(err){
        next(err);
    }
}

/**
 * get single gig
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 * @returns 
 */

export const getGig = async (req, res, next) => {
    try{
        
        const gig = await gigModel.findById(req.params.id);
        if(!gig) return next(createError(404, "Gig not found!"));

        if(gig){
            res.status(200).json({
                gig : gig
            });
        }

    }catch(err){
        next(err);
    }
}

/**
 * get all gigs
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 * @returns 
 */

export const getAllGigs = async (req, res, next) => {
    
    const fillter = {
        ...(req.query.userId && {userId : req.query.userId}),
        ...(req.query.cat && {category : req.query.cat}),
        ...(req.query.minPrice || req.query.maxPrice ? 
            {price : {
                ...(req.query.minPrice && {$gt : req.query.minPrice}), 
                ...(req.query.maxPrice && {$lt : req.query.maxPrice})
            }} : {}),
        ...(req.query.search && {title : {$regex : req.query.search, $options : "i"}})
    }
    
    // const fillter = {
    //     $and : [
    //         req.query.minPrice && { price: { $gt: req.query.minPrice } },
    //         req.query.maxPrice && { price: { $lt: req.query.maxPrice } },
    //     ]
    // }


    try{
        
        const gigs = await gigModel.find(fillter);
        if(!gigs) return next(createError(404, "Gigs not found!"));

        if(gigs){
            res.status(200).json({
                gigs : gigs
            });
        }

    }catch(err){
        next(err);
    }
}


