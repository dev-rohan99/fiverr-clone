import gigModel from "../models/gigModel.js";
import orderModel from "../models/orderModel.js";


/**
 * new order
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */

export const createOrder = async (req, res, next) => {
    try{

        const gig = await gigModel.findById(req.params.gigId);

        const newOrder = new orderModel({
            gigId : gig._id,
            gigImage : gig.gigCoverImg,
            gigTitle : gig.title,
            price : gig.price,
            sellerId : gig.userId,
            buyerId : req.userId,
            paymentIntent : "temporary"
        });
        await newOrder.save();

        if(newOrder){
            res.status(201).json({
                order : newOrder
            })
        }

    }catch(err){
        next(err);
    }
}



export const getOrders = async (req, res, next) => {
    try{

        const order = await orderModel.find({
            ...(req.isSeller ? {sellerId : req.userId} : {buyerId : req.userId}),
            isComplete: true,
        });
        

        // if(order){
            res.status(200).json({
                order : order
            })
        // }

    }catch(err){
        next(err);
    }
}

