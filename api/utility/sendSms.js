import axios from "axios";

export const sendSms = async (phone, sms) => {

    try{

        await axios.get(`https://bulksmsbd.net/api/smsapi?api_key=${process.env.SMS_API_KEY}&type=text&number=${phone}&senderid${process.env.SMS_SENDER_ID}&message=${sms}`)

    }catch(err){
        console.log(err);
    }

}

