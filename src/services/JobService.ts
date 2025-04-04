import { Job } from './../entities/Job';
import { JobRepository } from '../repositories/JobRepository';
import { DeleteResult } from 'typeorm';

export class JobService{

    private jobRepository = new JobRepository()

      async getAllUsers(): Promise<Job[]> {
        return await this.jobRepository.findAll();
      }
    
      async deleteJobByCode(codJob: number): Promise<number>{
        const result: DeleteResult = await this.jobRepository.delete(codJob);
        return result.affected ?? 0;
      }

      async createJob(newJob: Job): Promise<Job>{
        return this.jobRepository.save(newJob)
      }

}