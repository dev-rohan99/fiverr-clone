import mongoose from "mongoose";


const userDataSchema = mongoose.Schema({

    fullName : {
        type : String,
        trim : true
    },

    username : {
        type : String,
        required : true,
        trim : true
    },
    
    email : {
        type : String,
        unique : true,
        trim : true,
        required : true
    },

    phone : {
        type : String,
        trim : true,
        default : null
    },

    password : {
        type : String,
        required : true,
        trim : true
    },

    country : {
        type : String,
        trim : true
    },

    description : {
        type : String,
        trim : true
    },

    gender : {
        type : String,
        enum : ['male', 'female', null],
        default : null
    },

    avatar : {
        type : String,
        default : null
    },

    isSeller : {
        type : Boolean,
        required : true
    }


}, {
    timestamps : true
});



const userModel = mongoose.model('users', userDataSchema);

export default userModel;
