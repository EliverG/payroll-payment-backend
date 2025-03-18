import { Employee } from './../entities/Employee';
import { EmployeeRepository } from '../repositories/EmployeeRepository';
import { DeleteResult } from 'typeorm';

export class EmployeeService{

    private employeeRepository = new EmployeeRepository()

      async getAllUsers(): Promise<Employee[]> {
        return await this.employeeRepository.findAll();
      }
    
      async deleteEmployeeByCode(codeEmployee: number): Promise<number>{
        const result: DeleteResult = await this.employeeRepository.delete(codeEmployee);
        return result.affected ?? 0;
      }

      async createEmployee(newEmployee: Employee): Promise<Employee>{
        return this.employeeRepository.save(newEmployee)
      }

}