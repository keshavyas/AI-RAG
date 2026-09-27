/* This logger file is made in the backend.. to log all the activities of the user
there api call , req , visited and time spend on the page
help in to debug the bug fast .*/

const logger = {
    info(message,meta = {}){
        console.log(`[INFO]: ${message}`, meta);
    },
    warn(message,meta = {}){
        console.warn(`[WARN]: ${message}`, meta);
    },
    error(message, meta ={})
{
    console.log(`[ERROR]: ${message}`, meta);
}
};

module.exports = logger;