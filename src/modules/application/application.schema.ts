import { z } from 'zod';

export const createApplicationSchema = z.object({
  jobId: z.string().uuid(),
  status: z.enum(['pending', 'accepted', 'rejected'])
});

export type CreateApplicationInput = z.infer<typeof createApplicationSchema>;