import mongoose from "mongoose";


const gigDataSchema = mongoose.Schema({

    userId : {
        type : String,
        required : true
    },

    title : {
        type : String,
        required : true
    },

    description : {
        type : String,
        required : true
    },

    totalReviews : {
        type : Number,
        default : 0
    },

    reviewStar : {
        type : Number,
        default : 0
    },

    category : {
        type : String,
        required : true
    },

    gigCoverImg : {
        type : String,
        required : true
    },

    gigImgs : {
        type : [String],
        required : false
    },

    price : {
        type : String,
        required : true
    },

    shortTitle : {
        type : String,
        required : true
    },

    shortDesc : {
        type : String,
        required : true
    },

    deliveryTime : {
        type : String,
        required : true
    },

    revision : {
        type : String,
        required : true
    },

    features : {
        type : [String],
        required : true
    },

    sales : {
        type : Number,
        default : 0
    },

}, {
    timestamps : true
});



const gigModel = mongoose.model('gigs', gigDataSchema);

export default gigModel;
