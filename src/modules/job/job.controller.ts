import { FastifyReply, FastifyRequest } from 'fastify';
import { CreateJobInput } from './job.schema';
import { createJob, listJobs } from './job.service';

export async function createJobHandler(
  request: FastifyRequest<{ Body: CreateJobInput }>,
  reply: FastifyReply
) {
  const job = await createJob(request.body, 1); // TODO: Get userId from auth
  return reply.code(201).send(job);
}

export async function listJobsHandler() {
  return listJobs();
}