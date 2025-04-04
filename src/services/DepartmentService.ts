import { Department } from './../entities/Department';
import { DepartmentRepository } from '../repositories/DepartmentRepository';
import { DeleteResult } from 'typeorm';

export class DepartmentService{

    private departmentRepository = new DepartmentRepository()

      async getAllUsers(): Promise<Department[]> {
        return await this.departmentRepository.findAll();
      }
    
      async deleteDepartmentByCode(codeDepartment: string): Promise<number>{
        const result: DeleteResult = await this.departmentRepository.delete(codeDepartment);
        return result.affected ?? 0;
      }

      async createDepartment(newDepartment: Department): Promise<Department>{
        return this.departmentRepository.save(newDepartment)
      }

}