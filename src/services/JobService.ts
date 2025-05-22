import { Job } from './../entities/Job';
import { JobRepository } from '../repositories/JobRepository';
import { DeleteResult } from 'typeorm';
import { AppDataSource } from "../data-source";

export class JobService{

    private jobRepository = new JobRepository()

      async getAllUsers(): Promise<Job[]> {
        return await this.jobRepository.findAll();
      }
    
      async deleteJobByCode(jobCode: string): Promise<number>{
        const result: DeleteResult = await this.jobRepository.delete(jobCode);
        return result.affected ?? 0;
      }

      async createJob(newJob: Job): Promise<Job>{
        return this.jobRepository.save(newJob)
      }
   
      async jobById(jobCode: string): Promise<Job | null>{
              return this.jobRepository.findById(jobCode)
            }

      async getJobsWithDetails() {
              return await AppDataSource.query(`
    SELECT
      j.JOB_COD AS codigo,
      m.MAN_NAME AS gerencia,
      d.DEP_NAME AS nombre_departamento,
      j.JOB_NAME AS puesto,
      j.JOB_SALARY AS salario
    FROM MANAGEMENT m
    INNER JOIN DEPARTMENT d ON m.MAN_COD = d.DEP_MANAGEMENT_COD
    INNER JOIN JOB j ON j.JOB_COD_DEPARTMENT = d.DEP_COD
  `);
}


}