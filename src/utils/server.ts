import fastify, { FastifyServerOptions } from "fastify";
import { userRoutes } from "../modules/user/user.router";
import { jobRoutes } from "../modules/job/job.router";
import { applicationRoutes } from "../modules/application/application.router";
import { setupMetrics } from "./metrics";
import { logger } from "./logger";

export async function buildServer() {
  const server = fastify({
    logger: true,
  });

  server.log = logger;

  // Register plugins
  await setupMetrics(server);

  // Register routes
  server.register(userRoutes, { prefix: "/api/users" });
  server.register(jobRoutes, { prefix: "/api/jobs" });
  server.register(applicationRoutes, { prefix: "/api/applications" });

  return server;
}
