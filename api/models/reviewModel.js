import mongoose from "mongoose";


const reviewDataSchema = mongoose.Schema({

    userId : {
        type : String,
        required : true
    },

    gigId : {
        type : String,
        required : true
    },

    reviewNumb : {
        type : Number,
        required : true,
        enum : [1, 2, 3, 4, 5]
    },

    description : {
        type : String,
        required : true
    }

}, {
    timestamps : true
});



const reviewModel = mongoose.model('reviews', reviewDataSchema);

export default reviewModel;
