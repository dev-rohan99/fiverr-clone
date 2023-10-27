import userModel from "../models/userModel.js"
import createError from "../utility/createError.js";


/**
 * delete account
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 * @returns 
 */

export const deleteAccount = async (req, res, next) => {
    try{

        const user = await userModel.findById(req.params.id);

        if(req.userId !== user._id.toString()){
            return next(createError(401, 'Only you can delete your account!'));
        }
        await userModel.findByIdAndDelete(req.params.id);
        res.status(200).json({
            message : "Deleted successfull!"
        });

    }catch(err){
        return next(err);
    }
}

/**
 * get single user
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 * @returns 
 */

export const getSingleUser = async (req, res, next) => {
    try{

        const user = await userModel.findById(req.params.id);

        // if(req.userId !== user._id.toString()){
        //     return next(createError(401, 'Only you can access your account!'));
        // }
        
        res.status(200).json({
            message : "Successfull!",
            user : user
        });

    }catch(err){
        return next(err);
    }
}


