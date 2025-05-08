import { z } from 'zod';

export const createJobSchema = z.object({
  title: z.string(),
  company: z.string(),
  location: z.string(),
  description: z.string(),
  salary: z.string().optional()
});

export type CreateJobInput = z.infer<typeof createJobSchema>;