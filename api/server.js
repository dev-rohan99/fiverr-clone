// external modules import
import express from 'express';
import dotenv from 'dotenv';
import colors from 'colors';
import path from "path";
import cors from "cors";
import cookieParser from 'cookie-parser';
import mongoDBConnect from './config/db.js';
import userRouter from './routes/userRouter.js';
import gigRouter from './routes/gigRouter.js';
import orderRouter from './routes/orderRouter.js';
import messageRouter from './routes/messageRouter.js';
import reviewRouter from './routes/reviewRouter.js';
import conversationRouter from './routes/conversationRouter.js';
import authRouter from './routes/authRouter.js';
import errorHandler from './middlewares/common/errorHandler.js';

const __dirname = path.resolve();

// implement modules
const app = express();
dotenv.config();

// middlewares implement
app.use(express.json());
app.use(express.urlencoded({ extended : false }));
app.use(cors({
    origin : ["http://localhost:3000", "https://fiverr-clone-3ogs.onrender.com"],
    credentials : true
}));
app.use(cookieParser());

// static folder
app.use('/', express.static(path.join(__dirname, '/api/public')));

// routes implement
app.use('/api/v1/user', userRouter);
app.use('/api/v1/gigs', gigRouter);
app.use('/api/v1/orders', orderRouter);
app.use('/api/v1/messages', messageRouter);
app.use('/api/v1/reviews', reviewRouter);
app.use('/api/v1/conversations', conversationRouter);
app.use('/api/v1/auth', authRouter);

// error handler
app.use(errorHandler);

if (process.env.NODE_ENV === 'PRODUCTION'){
    app.use(express.static(path.join(__dirname, '/client/build')));
  
    app.get('*', (req, res) =>
      res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'))
    );
}

// running server
const PORT = process.env.SERVER_PORT;

app.listen(PORT, (err) => {
    if(err){
        console.log(err);
    }else{
        mongoDBConnect();
        console.log(`Server running on ${PORT} PORT!`.bgGreen.black);
    }
});


