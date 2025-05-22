import { DeleteResult } from "typeorm";
import { AppDataSource } from "../data-source";
import { Management } from "../entities/Management";

export class ManagementRepository{
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

        async delete(idManagement: string): Promise<DeleteResult>{
          return await this.repository.delete({code: idManagement})
        }
    
}