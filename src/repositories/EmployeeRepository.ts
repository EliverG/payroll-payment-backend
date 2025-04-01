import { DeleteResult } from "typeorm";
import { AppDataSource } from "../data-source";
import { Employee } from "../entities/Employee";

export class EmployeeRepository{
      private repository = AppDataSource.getRepository(Employee);

        async findAll(): Promise<Employee[]> {
          return await this.repository.find();
        }
      
        async findById(empCod: string): Promise<Employee | null> {
          return await this.repository.findOneBy({ empCod });
        }
      
        async save(employee: Employee): Promise<Employee> {
          return await this.repository.save(employee);
        }

        async delete(idEmployee: string): Promise<DeleteResult>{
          return await this.repository.delete({empCod: idEmployee})
        }
    
}