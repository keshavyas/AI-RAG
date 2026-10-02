require("dotenv").config();

const env = require("./env.js");
const db = require("./db.js");
const redis = require ("./redis.js");
const storage = require ("./storage.js");

module.exports = {
    env ,
    db ,
    redis,
    storage
};