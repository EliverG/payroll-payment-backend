import { BonusEmployee } from './../entities/BonusEmployee';
import { BonusEmployeeRepository } from '../repositories/BonusEmployeeRepository';
import { DeleteResult } from 'typeorm';

export class BonusEmployeeService{

    private bonusEmployeeRepository = new BonusEmployeeRepository()

      async getAllUsers(): Promise<BonusEmployee[]> {
        return await this.bonusEmployeeRepository.findAll();
      }
    
      async deleteBonusEmployeeByCode(code: number): Promise<number>{
        const result: DeleteResult = await this.bonusEmployeeRepository.delete(code);
        return result.affected ?? 0;
      }

      async createBonusEmployee(newBonusEmployee: BonusEmployee): Promise<BonusEmployee>{
        return this.bonusEmployeeRepository.save(newBonusEmployee)
      }

      /*async managementById(code: Number): Promise<Management | null>{
              return this.managementRepository.findById(code)
            }*/

}