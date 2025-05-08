import { describe, it, expect } from 'vitest';
import { createUser } from './user.service';

describe('User Module', () => {
  describe('createUser', () => {
    it('should create a user', async () => {
      const input = {
        email: 'test@example.com',
        name: 'Test User',
        password: 'password123'
      };
      const user = await createUser(input);
      expect(user.email).toBe(input.email);
      expect(user.name).toBe(input.name);
    });
  });
});