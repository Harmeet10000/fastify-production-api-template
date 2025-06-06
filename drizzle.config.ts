import type { Config } from 'drizzle-kit';

export default {
  schema: './src/db/schema.ts',
  out: './migrations',
  driver: 'pg',
  dbCredentials: {
    connectionString: process.env.DATABASE || 'postgresql://postgres:postgres@localhost:5432/fastify_api'
  }
} satisfies Config;