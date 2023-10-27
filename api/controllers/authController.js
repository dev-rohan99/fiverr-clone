import userModel from "../models/userModel.js";
import createError from "../utility/createError.js";
import { genHashPassword, verifyPassword } from "../utility/hash.js";
import { createToken } from "../utility/token.js";
import { isEmail, isUsername } from "../utility/validate.js";


/**
 * user register
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */

export const register = async (req, res, next) => {
    try{

        const findEmail = await userModel.findOne({email : req.body.email});
        if(findEmail) return next(createError(400, 'Email address already exist!'));

        const findUsername = await userModel.findOne({username : req.body.username});
        if(findUsername) return next(createError(400, 'Username already exist!'));

        const user = new userModel({
            ...req.body,
            password : genHashPassword(req.body.password)
        });
        await user.save();

        if(user){
            res.status(201).json({
                message : "User has been created!"
            });
        }

    }catch(err){
        return next(err);
    }
}

/**
 * user login
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 * @returns 
 */

export const login = async (req, res, next) => {
    try{

        const {usernameOrEmail, password} = req.body;

        if(isEmail(usernameOrEmail)){
    
            const loginUserForEmail = await userModel.findOne({email : usernameOrEmail});
            
            if(!loginUserForEmail){
                return next(createError(404, 'Not found!'));
            }else{
    
                if(!verifyPassword(password, loginUserForEmail.password)){
                    return next(createError(400, 'Password not matched!'));
                }else{
    
                    const token = createToken({
                        id : loginUserForEmail._id,
                        isSeller : loginUserForEmail.isSeller
                    }, '365d');
                    
                    return res.status(200).cookie('authToken', token).json({
                        message : "User login successfull!",
                        user : loginUserForEmail
                    });
    
                }
    
            }

        }else if(isUsername(usernameOrEmail)){
    
            const loginUserForusername = await userModel.findOne({username : usernameOrEmail});
            
            if(!loginUserForusername){
                return next(createError(404, 'Not found!'));
            }else{
    
                if(!verifyPassword(password, loginUserForusername.password)){
                    return next(createError(400, 'Password not matched!'));
                }else{
    
                    const token = createToken({
                        id : loginUserForusername._id,
                        isSeller : loginUserForusername.isSeller
                    }, '365d');
                    
                    return res.status(200).cookie('authToken', token, {
                        httpOnly: false,
                        secure: false, 
                    }).json({
                        message : "User login successfull!",
                        user : loginUserForusername
                    });
    
                }
    
            }

        }else{
            return next(createError(400, 'Invalid phone or email address!'));
        }

    }catch(err){
        console.log(err);
        return next(err);
    }
}



export const logOut = async (req, res, next) => {
    try{

        return res.status(200).clearCookie("authToken", {
            sameSite : "none",
            secure : true
        }).json({
            message : "You has been logged out!"
        });

    }catch(err){
        return next(err);
    }
}

