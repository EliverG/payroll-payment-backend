import { Management } from './../entities/Management';
import { ManagementRepository } from '../repositories/ManagementRepository';
import { DeleteResult } from 'typeorm';

export class ManagementService{

    private managementRepository = new ManagementRepository()

      async getAllUsers(): Promise<Management[]> {
        return await this.managementRepository.findAll();
      }
    
      async deleteManagementByCode(code: string): Promise<number>{
        const result: DeleteResult = await this.managementRepository.delete(code);
        return result.affected ?? 0;
      }

      async createManagement(newManagement: Management): Promise<Management>{
        return this.managementRepository.save(newManagement)
      }

      /*async managementById(code: Number): Promise<Management | null>{
              return this.managementRepository.findById(code)
            }*/

}