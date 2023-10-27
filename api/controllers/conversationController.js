import conversationModel from "../models/conversationModel.js";
import userModel from "../models/userModel.js";
import createError from "../utility/createError.js";


/**
 * get conversation
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */

export const createConversation = async (req, res, next) => {
    try{

        const newConversation = new conversationModel({
            id : req.isSeller ? req.userId + req.body.to : req.body.to + req.userId,
            sellerId: req.isSeller ? req.userId : req.body.to,
            buyerId: req.isSeller ? req.body.to : req.userId,
            readBySeller : req.isSeller,
            readByBuyer : !req.isSeller,
        });

        const conversationCreate = await newConversation.save();
        
        if(!conversationCreate){
            next(createError(400, "Try again!"))
        }
        
        if(conversationCreate){
            res.status(201).json({
                conversation : conversationCreate
            });
        }

    }catch(err){
        next(err);
    }
}

/**
 * update conversation
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */

export const updateConversation = async (req, res, next) => {
    try{

        const updateConversation = await conversationModel.findOneAndUpdate({id : req.params.id}, {
            $set : {
                ...(req.isSeller ? { readBySeller : true } : { readByBuyer : true })
            }
        }, { new : true });

        if(!updateConversation){
            next(createError(400, "Try again!"))
        }
        
        if(updateConversation){
            res.status(200).json({
                conversation : updateConversation
            });
        }

    }catch(err){
        next(err);
    }
}


export const getConversations = async (req, res, next) => {
    try{

        const conversations = await conversationModel.find(
            req.isSeller ? { sellerId : req.userId } : { buyerId : req.userId }
        ).sort({ updatedAt : -1 });

        if(!conversations){
            next(createError(404, "Not found!"))
        }
        
        if(conversations){
            res.status(200).json({
                conversations : conversations
            });
        }

    }catch(err){
        next(err);
    }
}


export const getSingleConversation = async (req, res, next) => {
    try{

        const conversation = await conversationModel.findOne({ id : req.params.id });

        if(!conversation){
            next(createError(404, "Not found!"))
        }
        
        if(conversation){
            res.status(200).json({
                conversations : conversation
            });
        }

    }catch(err){
        next(err);
    }
}


