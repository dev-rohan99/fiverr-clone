import mongoose from "mongoose";


const messageDataSchema = mongoose.Schema({

    conversationId : {
        type : String,
        required : true
    },

    userId : {
        type : String,
        required : true
    },

    description : {
        type : String,
        required : true
    }

}, {
    timestamps : true
});



const messageModel = mongoose.model('messages', messageDataSchema);

export default messageModel;
