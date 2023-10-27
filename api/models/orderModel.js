import mongoose from "mongoose";


const orderDataSchema = mongoose.Schema({

    gigId : {
        type : String,
        required : true
    },

    gigImage : {
        type : String,
        required : false
    },

    gigTitle : {
        type : String,
        required : true
    },

    price : {
        type : String,
        required : true
    },

    sellerId : {
        type : String,
        required : true
    },

    buyerId : {
        type : String,
        required : true
    },

    isComplete : {
        type : Boolean,
        default : false
    },

    paymentIntent : {
        type : String,
        required : true
    }

}, {
    timestamps : true
});



const orderModel = mongoose.model('orders', orderDataSchema);

export default orderModel;
