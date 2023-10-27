/**
 * Express common error handler
 * @param {*} error 
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */

const errorHandler = (error, req, res, next) => {

    let errorStatus = error.status || 500;
    let errorMessage = error.message || 'Something went wrong!';

    res.status(errorStatus).json({
        status : errorStatus,
        message : errorMessage,
        stack : error.stack
    });

}


export default errorHandler;
