import { describe, it, expect } from 'vitest';
import { createApplication } from './application.service';

describe('Application Module', () => {
  describe('createApplication', () => {
    it('should create an application', async () => {
      const input = {
        jobId: '123e4567-e89b-12d3-a456-426614174000',
        status: 'pending'
      };
      const application = await createApplication(input, 1);
      expect(application.jobId).toBe(input.jobId);
      expect(application.status).toBe(input.status);
    });
  });
});