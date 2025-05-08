import { db } from '../db';
import { users, jobs, applications } from '../db/schema';

async function seed() {
  // Create test user
  const [user] = await db.insert(users).values({
    email: 'test@example.com',
    name: 'Test User',
    password: 'password123'
  }).returning();

  // Create test jobs
  const [job] = await db.insert(jobs).values({
    title: 'Software Engineer',
    company: 'Tech Corp',
    location: 'Remote',
    description: 'Full-stack developer position',
    salary: '100k-150k',
    userId: user.id
  }).returning();

  // Create test application
  await db.insert(applications).values({
    jobId: job.id,
    userId: user.id,
    status: 'pending'
  });

  console.log('Seed data inserted successfully');
  process.exit(0);
}

seed().catch(console.error);