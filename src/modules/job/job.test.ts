import { describe, it, expect } from 'vitest';
import { createJob, listJobs } from './job.service';

describe('Job Module', () => {
  describe('createJob', () => {
    it('should create a job', async () => {
      const input = {
        title: 'Software Engineer',
        company: 'Tech Corp',
        location: 'Remote',
        description: 'Full-stack developer position',
        salary: '100k-150k'
      };
      const job = await createJob(input, 1);
      expect(job.title).toBe(input.title);
      expect(job.company).toBe(input.company);
    });
  });
});