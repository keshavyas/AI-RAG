/*This the page not found error (404) custom page , for global use ! */

PageNotFound = (req,res) => {
        return res.status(404).json({
            error:{
                code :"PAGE_NOT_FOUND",
                message :`Route ${req.method} ${req.originalUrl} not found`
            }
        });
};

module.exports = PageNotFound;