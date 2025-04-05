import { Job } from './../entities/Job';
import { JobRepository } from '../repositories/JobRepository';
import { DeleteResult } from 'typeorm';

export class JobService {

  private jobRepository = new JobRepository();


  async getAllJobs(): Promise<Job[]> {
    return await this.jobRepository.findAll();
  }


  async deleteJobByCode(codeJob: string): Promise<number> {
    const result: DeleteResult = await this.jobRepository.delete(codeJob);
    return result.affected ?? 0;  // Retorna la cantidad de filas afectadas
  }

  async createJob(newJob: Job): Promise<Job> {
    return this.jobRepository.save(newJob);
  }


  async jobById(codeJob: string): Promise<Job | null> {
    return this.jobRepository.findById(codeJob);
  }


  async updateJobByCode(codeJob: string, jobData: Partial<Job>): Promise<Job | null> {
    const existingJob = await this.jobRepository.findById(codeJob);
    if (!existingJob) {
      return null;  // Retorna null si el puesto no existe
    }


    const updatedJob = Object.assign(existingJob, jobData);
    return await this.jobRepository.save(updatedJob);
  }
}
