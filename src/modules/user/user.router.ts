import { FastifyPluginAsync } from 'fastify';
import { createUserHandler, loginHandler } from './user.controller';
import { createUserSchema, loginSchema } from './user.schema';

export const userRoutes: FastifyPluginAsync = async (fastify) => {
  fastify.post('/', {
    schema: {
      body: createUserSchema
    }
  }, createUserHandler);

  fastify.post('/login', {
    schema: {
      body: loginSchema
    }
  }, loginHandler);
};