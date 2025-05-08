import { FastifyPluginAsync } from 'fastify';
import { createApplicationHandler, listApplicationsHandler } from './application.controller';
import { createApplicationSchema } from './application.schema';

export const applicationRoutes: FastifyPluginAsync = async (fastify) => {
  fastify.post('/', {
    schema: {
      body: createApplicationSchema
    }
  }, createApplicationHandler);

  fastify.get('/', listApplicationsHandler);
};