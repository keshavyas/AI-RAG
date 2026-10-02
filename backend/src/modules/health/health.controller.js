const { db, redis, storage } = require("../../config");
const { sendSuccess } = require("../../core/utils/response");

const getHealth = async (req, res, next) => {
    try {
    await db.checkDatabaseConnection();
    await redis.redis.checkRedisConnection();
    await storage.checkStorageConnection();

    return sendSuccess(     res, {
        service: "AI Developer Platform API",
        status: "healthy",
        infrastructure: {
        database: "connected",
        redis: "connected",
        storage: "connected"
    }
    });
} catch (error) {
    next(error);
}
};

module.exports = {
getHealth
};