import { DeleteResult } from "typeorm";
import { AppDataSource } from "../data-source";
import { BonusEmployee } from "../entities/BonusEmployee";

export class BonusEmployeeRepository{
      private repository = AppDataSource.getRepository(BonusEmployee);

        async findAll(): Promise<BonusEmployee[]> {
          return await this.repository.find();
        }
      
        async findById(code: number): Promise<BonusEmployee | null> {
          return await this.repository.findOneBy({ code });
        }
      
        async save(bonusEmploye: BonusEmployee): Promise<BonusEmployee> {
          return await this.repository.save(bonusEmploye);
        }

        async delete(idBonusEmployee: number): Promise<DeleteResult>{
          return await this.repository.delete({code: idBonusEmployee})
        }
    
}