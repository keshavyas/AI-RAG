//The response is used here as globally so we didn't write the api response structure again !
const {SendSuccess } = require ("../../core/utils/response.js")

const getHealth = (req, res)=>{
    return SendSuccess(res ,{
        message :"The AI-Devloper tools is working fine !" , 
        statsu :" 200" 
    });
};


module.exports = getHealth;
