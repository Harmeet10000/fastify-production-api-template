import { beforeAll, afterAll } from 'vitest';
import { buildServer } from '../utils/server';
import { FastifyInstance } from 'fastify';

let server: FastifyInstance;

beforeAll(async () => {
  server = await buildServer();
});

afterAll(async () => {
  await server.close();
});