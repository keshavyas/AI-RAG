const app = require("./app");

const env = require("./src/config/env.js");
const logger = require("./src/core/utils/Logger.js");

const server = app.listen(env.PORT, () => {
    logger.info(
    `AI Developer Platform API running on port ${env.PORT}`
);
});

const shutdown = (signal) => {
  logger.info(`${signal} received. Shutting down server...`);

  server.close(() => {
    logger.info("Server closed.");

    process.exit(0);
  });
};

process.on("SIGTERM", () => shutdown("SIGTERM"));
process.on("SIGINT", () => shutdown("SIGINT"));