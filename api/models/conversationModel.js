import mongoose from "mongoose";


const conversationDataSchema = mongoose.Schema({

    id : {
        type : String,
        required : true,
        unique : true
    },

    sellerId : {
        type : String,
        required : true
    },

    buyerId : {
        type : String,
        required : true
    },

    readBySeller : {
        type : String,
        required : true
    },

    readByBuyer : {
        type : String,
        required : true
    },

    lastMessage : {
        type : String,
        required : false
    }

}, {
    timestamps : true
});



const conversationModel = mongoose.model('conversations', conversationDataSchema);

export default conversationModel;
