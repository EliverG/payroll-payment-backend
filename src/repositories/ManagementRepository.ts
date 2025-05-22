import { DeleteResult } from "typeorm";
import { AppDataSource } from "../data-source";
import { Management } from "../entities/Management";

export class ManagementRepository {
  private repository = AppDataSource.getRepository(Management);

        async findAll(): Promise<Management[]> {
          return await this.repository.find();
        }
      
        async findByCode(code: string): Promise<Management | null> {
          return await this.repository.findOneBy({ code });
        }
      
        async save(management: Management): Promise<Management> {
          return await this.repository.save(management);
        }

  // Buscar un management por su código
  async findById(code: string): Promise<Management | null> {
    return await this.repository.findOne({
      where: { code },
      relations: ["departments"],
    });
  }

  // Guardar un nuevo management
  async save(managementData: Partial<Management>): Promise<Management> {
    const newManagement = this.repository.create(managementData);
    return await this.repository.save(newManagement);
  }

  // Eliminar un management por código
  async delete(codMan: string): Promise<DeleteResult> {
    return await this.repository.delete({ code: codMan });
  }
}
