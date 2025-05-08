import { pgTable, serial, text, timestamp, uuid } from 'drizzle-orm/pg-core';

export const users = pgTable('users', {
  id: serial('id').primaryKey(),
  email: text('email').notNull().unique(),
  name: text('name').notNull(),
  password: text('password').notNull(),
  createdAt: timestamp('created_at').defaultNow().notNull()
});

export const jobs = pgTable('jobs', {
  id: uuid('id').defaultRandom().primaryKey(),
  title: text('title').notNull(),
  company: text('company').notNull(),
  location: text('location').notNull(),
  description: text('description').notNull(),
  salary: text('salary'),
  userId: serial('user_id').references(() => users.id),
  createdAt: timestamp('created_at').defaultNow().notNull()
});

export const applications = pgTable('applications', {
  id: uuid('id').defaultRandom().primaryKey(),
  jobId: uuid('job_id').references(() => jobs.id),
  userId: serial('user_id').references(() => users.id),
  status: text('status').notNull(),
  createdAt: timestamp('created_at').defaultNow().notNull()
});