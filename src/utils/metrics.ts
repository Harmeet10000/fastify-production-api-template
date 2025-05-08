import { FastifyInstance } from 'fastify';
import { register, collectDefaultMetrics } from 'prom-client';
import { config } from '../config';

export async function setupMetrics(server: FastifyInstance) {
  if (!config.metrics.enabled) return;

  collectDefaultMetrics();

  server.get(config.metrics.path, async (_, reply) => {
    return reply.send(await register.metrics());
  });
}