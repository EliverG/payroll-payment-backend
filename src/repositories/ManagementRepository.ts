import { DeleteResult } from "typeorm";
import { AppDataSource } from "../data-source";
import { Management } from "../entities/Management";

export class ManagementRepository {
  private repository = AppDataSource.getRepository(Management);

  // Obtener todos los managements con sus departamentos relacionados
  async findAll(): Promise<Management[]> {
    return await this.repository.find({ relations: ["departments"] });
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
  async delete(code: string): Promise<DeleteResult> {
    return await this.repository.delete({ code });
  }
}
