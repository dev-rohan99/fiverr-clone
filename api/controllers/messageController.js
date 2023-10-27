import conversationModel from "../models/conversationModel.js";
import messageModel from "../models/messageModel.js";


/**
 * create message
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */

export const createMessage = async (req, res, next) => {
    try{
console.log(req.body.conversationId);
console.log(req.body.description);
        const newMessage = new messageModel({
            conversationId : req.body.conversationId,
            userId : req.userId,
            description : req.body.description,
        });
        const saveMessage = await newMessage.save();

        await conversationModel.findOneAndUpdate({id : req.body.conversationId} , {
            $set : {
                readBySeller : req.isSeller,
                readByBuyer : !req.isSeller,
                lastMessage : req.body.description
            }
        }, { new : true });

        if(!saveMessage){
            next(createError(400, "Something went wrong!"))
        }
        
        if(saveMessage){
            res.status(201).json({
                messages : saveMessage
            });
        }

    }catch(err){
        next(err);
    }
}

/**
 * get messages
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */

export const getMessages = async (req, res, next) => {
    try{

        const messages = await messageModel.find({conversationId : req.params.id});

        if(!messages){
            next(createError(404, "Messages not found!"))
        }
        
        if(messages){
            res.status(200).json({
                messages : messages
            });
        }

    }catch(err){
        next(err);
    }
}

