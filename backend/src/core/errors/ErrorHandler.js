const logger = require("../utils/Logger.js");

const handleError = (err, req , res , next ) =>{
    logger.error(err.message, {
        method : req.method,
        url : req.originalUrl,
    stack : err.stack
    });
    const statusCode = err.statusCode || 500;
    const code = err.code || "INTERNAL_ERROR";
    
    const message =
    statusCode === 500 && process.env.NODE_ENV === "production" ? "internal server error" : err.message;

    return res.status(statusCode).json ({
        success:false , 
        error :{
            code,
            message
        }
    });
};


module.exports = handleError;
