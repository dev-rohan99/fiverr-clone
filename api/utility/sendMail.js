import nodemailer from "nodemailer";

/**
 * 
 * @param {*} to 
 * @param {*} data 
 */

export const sendActivationLink = async (to, data) => {

    let transporter = nodemailer.createTransport({
        host : process.env.MAIL_HOST,
        port : process.env.MAIL_PORT,
        auth : {
            user : process.env.MAIL_ID,
            pass : process.env.MAIL_PASS
        }
    });

    try{

        // send activation mail
        await transporter.sendMail({
            from : `asSunnah <${process.env.MAIL_ID}>`,
            subject : 'Account activation',
            to : to,
            html: `<div>
                <h1 style="font-size:'55px'">asSunnah</h1>
                <h3 style="font-size:'25px'">Hello ${data.name}</h3>
                <h3 style="font-size:'25px'">You registered an account on asSunnah, before being able to use your account you need to verify that this is your email address by clicking here : </h3>
                <a style="font-size:'25px'" href="${data.link}">${data.link}</a>
                <br>
                <h2 style="font-size:'35px'">Or send code : ${data.code}</h2>
                <h3 style="font-size:'25px'">Kind Regards, asSunnah Team</h3>
            </div>`
        });

    }catch(err){
        console.log(err);
    }

}

/**
 * 
 * @param {*} to 
 * @param {*} data 
 */

export const resetPasswordLink = async (to, data) => {

    let transporter = nodemailer.createTransport({
        host : process.env.MAIL_HOST,
        port : process.env.MAIL_PORT,
        auth : {
            user : process.env.MAIL_ID,
            pass : process.env.MAIL_PASS
        }
    });

    try{

        // send activation mail
        await transporter.sendMail({
            from : `asSunnah <${process.env.MAIL_ID}>`,
            subject : 'Forgot Password',
            to : to,
            html: `<div>
                <h1 style="font-size:'55px'">asSunnah</h1>
                <h3 style="font-size:'25px'">Hello ${data.name}</h3>
                <h3 style="font-size:'25px'">You forgot password an account on asSunnah, before being able to use your account you need to verify that this is your email address by clicking here : </h3>
                <a style="font-size:'25px'" href="${data.link}">${data.link}</a>
                <br>
                <h2 style="font-size:'35px'">Or send code : ${data.code}</h2>
                <h3 style="font-size:'25px'">Kind Regards, asSunnah Team</h3>
            </div>`
        });

    }catch(err){
        console.log(err);
    }

}


