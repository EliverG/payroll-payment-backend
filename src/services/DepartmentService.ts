import { Department } from './../entities/Department';
import { ManagementRepository } from '../repositories/ManagementRepository'; // Asegúrate de tener este repositorio.

import { DepartmentRepository } from '../repositories/DepartmentRepository';
import { DeleteResult } from 'typeorm';

export class DepartmentService{

    private departmentRepository = new DepartmentRepository()
    private managementRepository = new ManagementRepository(); // Agrega este repositorio

      async getAllUsers(): Promise<Department[]> {
        return await this.departmentRepository.findAll();
      }
    
      async deleteDepartmentByCode(codeDepartment: string): Promise<number>{
        const result: DeleteResult = await this.departmentRepository.delete(codeDepartment);
        return result.affected ?? 0;
      }

        async createDepartment(newDepartment: Department): Promise<Department> {
          const management = await this.managementRepository.findById(newDepartment.managementCode);
        
          if (!management) {
            throw new Error(`Management con código '${newDepartment.managementCode}' no existe`);
          }
        
          // Seteamos el objeto Management
          newDepartment.management = management;
        
          // Eliminamos el campo 'managementCode' para evitar confusión en la relación
          delete (newDepartment as any).managementCode;
        
          return await this.departmentRepository.save(newDepartment);
        }
        

}