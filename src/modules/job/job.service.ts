import { db } from '../../db';
import { jobs } from '../../db/schema';
import { CreateJobInput } from './job.schema';

export async function createJob(input: CreateJobInput, userId: number) {
  const job = await db.insert(jobs).values({
    ...input,
    userId
  }).returning();
  return job[0];
}

export async function listJobs() {
  return db.query.jobs.findMany();
}