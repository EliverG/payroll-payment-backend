import { DeleteResult } from "typeorm";
import { AppDataSource } from "../data-source";
import { Management } from "../entities/Management";

export class ManagementRepository {
  private repository = AppDataSource.getRepository(Management);

        async findAll(): Promise<Management[]> {
          return await this.repository.find();
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



  // Eliminar un management por código
  async delete(codMan: string): Promise<DeleteResult> {
    return await this.repository.delete({ code: codMan });
  }
}
