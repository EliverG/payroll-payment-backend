import { DeleteResult } from "typeorm";
import { AppDataSource } from "../data-source";
import { Employee } from "../entities/Employee";

export class EmployeeRepository{
      private repository = AppDataSource.getRepository(Employee);

        async findAll(): Promise<Employee[]> {
          return await this.repository.find();
        }
      
        async findById(codEmployee: number): Promise<Employee | null> {
          return await this.repository.findOneBy({ codEmployee });
        }
      
        async save(employee: Employee): Promise<Employee> {
          return await this.repository.save(employee);
        }

        async delete(idEmployee: number): Promise<DeleteResult>{
          return await this.repository.delete({codEmployee: idEmployee})
        }
    
}