const app = require("./app");
const { env, db } = require("./config");
const logger = require("./core/utils/logger");

const server = app.listen(env.port, () => {
  logger.info(`AI Developer Platform API running on port ${env.port}`);
});

const shutdown = async (signal) => {
  logger.info(`${signal} received. Shutting down server...`);

  server.close(async () => {
    try {
      await db.disconnectDatabase();
      logger.info("Database connection closed.");
      logger.info("Server closed.");
      process.exit(0);
    } catch (error) {
      logger.error("Error during shutdown", {
        message: error.message
      });

      process.exit(1);
    }
  });
};

process.on("SIGTERM", () => shutdown("SIGTERM"));
process.on("SIGINT", () => shutdown("SIGINT"));