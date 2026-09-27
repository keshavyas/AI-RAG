/* This file is the standard api helper of the backend requests */
const SendSuccess = (res ,data , statusCode = 200) => {
    return res.status(statusCode).json({
        success: true,
        data
    });
};

const SendError = (res, message, statusCode = 500) => {
    return res.status(statusCode).json({
        success: false,
        message
    });
};

module.exports = { SendSuccess, SendError };

//now all the api can send the consistent responses !