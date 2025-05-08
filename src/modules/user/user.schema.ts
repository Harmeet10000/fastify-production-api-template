import { z } from 'zod';

export const createUserSchema = z.object({
  email: z.string().email(),
  name: z.string(),
  password: z.string().min(6)
});

export const loginSchema = z.object({
  email: z.string().email(),
  password: z.string()
});

export type CreateUserInput = z.infer<typeof createUserSchema>;
export type LoginInput = z.infer<typeof loginSchema>;