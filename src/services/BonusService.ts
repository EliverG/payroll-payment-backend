import { Bonus } from './../entities/Bonus';
import { BonusRepository } from '../repositories/BonusRepository';
import { DeleteResult } from 'typeorm';

export class BonusService{

    private bonusRepository = new BonusRepository()

      async getAllUsers(): Promise<Bonus[]> {
        return await this.bonusRepository.findAll();
      }
    
      async deleteBonusByCode(code: string): Promise<number>{
        const result: DeleteResult = await this.bonusRepository.delete(code);
        return result.affected ?? 0;
      }

      async createBonus(newBonus: Bonus): Promise<Bonus>{
        return this.bonusRepository.save(newBonus)
      }

      /*async managementById(code: Number): Promise<Management | null>{
              return this.managementRepository.findById(code)
            }*/

}