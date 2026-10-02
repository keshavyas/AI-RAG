const redis = require("ioredis");

const redisClient = new redis(process.env.REDIS_URL);

const checkRedisConnection = async () => {
    await redisClient.ping();
};

module.exports = {
    redis: redisClient,
    checkRedisConnection
};
