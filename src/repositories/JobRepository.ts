import { DeleteResult } from "typeorm";
import { AppDataSource } from "../data-source";
import { Job } from "../entities/Job";

export class JobRepository {
  private repository = AppDataSource.getRepository(Job);

  // Método para obtener todos los trabajos
  async findAll(): Promise<Job[]> {
    return await this.repository.find();
  }

  // Método para obtener un trabajo por su código (jobCode)
  async findById(jobCode: string): Promise<Job | null> {
    return await this.repository.findOneBy({ jobCode });
  }

  // Método para guardar un nuevo trabajo
  async save(job: Job): Promise<Job> {
    return await this.repository.save(job);
  }

  // Método para eliminar un trabajo por su código
  async delete(jobCode: string): Promise<DeleteResult> {
    return await this.repository.delete({ jobCode });
  }
}
