import { FastifyPluginAsync } from 'fastify';
import { createJobHandler, listJobsHandler } from './job.controller';
import { createJobSchema } from './job.schema';

export const jobRoutes: FastifyPluginAsync = async (fastify) => {
  fastify.post('/', {
    schema: {
      body: createJobSchema
    }
  }, createJobHandler);

  fastify.get('/', listJobsHandler);
};