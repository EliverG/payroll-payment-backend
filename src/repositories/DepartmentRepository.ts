import { DeleteResult } from "typeorm";
import { AppDataSource } from "../data-source";
import { Department } from "../entities/Department";

export class DepartmentRepository{
      private repository = AppDataSource.getRepository(Department);

        async findAll(): Promise<Department[]> {
          return await this.repository.find();
        }
      
        async findById(code: string): Promise<Department | null> {
          return await this.repository.findOneBy({ code });
        }
      
        async save(Department: Department): Promise<Department> {
          return await this.repository.save(Department);
        }

        async delete(idDepartment: string): Promise<DeleteResult>{
          return await this.repository.delete({code: idDepartment})
        }
    
}