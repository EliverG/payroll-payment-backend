import { Management } from "./../entities/Management";
import { ManagementRepository } from "../repositories/ManagementRepository";
import { DeleteResult } from "typeorm";

export class ManagementService {
  private managementRepository = new ManagementRepository();

  async getAllManagements(): Promise<Management[]> {
    return await this.managementRepository.findAll();
  }

  async deleteManagementByCode(manCod: string): Promise<number> {
    const result: DeleteResult = await this.managementRepository.delete(manCod);
    return result.affected ?? 0;
  }

  async createManagement(newManagement: Management): Promise<Management> {
    return await this.managementRepository.save(newManagement);
  }

  async getManagementById(manCod: string): Promise<Management | null> {
    return await this.managementRepository.findById(manCod);
  }
}
