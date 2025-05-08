import "source-map-support/register";
import pino from "pino";
import { config } from "../config";

export const logger = pino({
  level: config.app.environment === "development" ? "debug" : "info",
  transport: {
    target: "pino-pretty",
    options: {
      colorize: true,
      translateTime: "HH:MM:ss Z",
      ignore: "pid,hostname",
    },
  },
});
