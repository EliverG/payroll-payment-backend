import { DeleteResult } from "typeorm";
import { AppDataSource } from "../data-source";
import { Bonus } from "../entities/Bonus";

export class BonusRepository{
      private repository = AppDataSource.getRepository(Bonus);

        async findAll(): Promise<Bonus[]> {
          return await this.repository.find();
        }
      
        async findById(code: string): Promise<Bonus | null> {
          return await this.repository.findOneBy({ code });
        }
      
        async save(bonus: Bonus): Promise<Bonus> {
          return await this.repository.save(bonus);
        }

        async delete(idBonus: string): Promise<DeleteResult>{
          return await this.repository.delete({code: idBonus})
        }
    
}