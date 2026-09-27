const dotenv = require ('dotenv');

dotenv.config();

module.exports = {
    PORT: Number(process.env.PORT) || 5000,
    API_PREFIX: process.env.API_PREFIX || "/api",
    NODE_ENV: process.env.NODE_ENV || "development"
};

