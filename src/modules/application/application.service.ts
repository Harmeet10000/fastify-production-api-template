import { db } from '../../db';
import { applications } from '../../db/schema';
import { CreateApplicationInput } from './application.schema';

export async function createApplication(input: CreateApplicationInput, userId: number) {
  const application = await db.insert(applications).values({
    ...input,
    userId
  }).returning();
  return application[0];
}

export async function listApplicationsByUser(userId: number) {
  return db.query.applications.findMany({
    where: (applications, { eq }) => eq(applications.userId, userId)
  });
}