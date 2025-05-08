import { FastifyReply, FastifyRequest } from 'fastify';
import { CreateApplicationInput } from './application.schema';
import { createApplication, listApplicationsByUser } from './application.service';

export async function createApplicationHandler(
  request: FastifyRequest<{ Body: CreateApplicationInput }>,
  reply: FastifyReply
) {
  const application = await createApplication(request.body, 1); // TODO: Get userId from auth
  return reply.code(201).send(application);
}

export async function listApplicationsHandler() {
  return listApplicationsByUser(1); // TODO: Get userId from auth
}