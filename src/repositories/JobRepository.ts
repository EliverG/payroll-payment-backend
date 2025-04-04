import { DeleteResult } from "typeorm";
import { AppDataSource } from "../data-source";
import { Job } from "../entities/Job";

export class JobRepository{
      private repository = AppDataSource.getRepository(Job);

        async findAll(): Promise<Job[]> {
          return await this.repository.find();
        }
      
        async findById(codJob: number): Promise<Job | null> {
          return await this.repository.findOneBy({ codJob });
        }
      
        async save(job: Job): Promise<Job> {
          return await this.repository.save(job);
        }

        async delete(idJob: number): Promise<DeleteResult>{
          return await this.repository.delete({codJob: idJob})
        }
    
}