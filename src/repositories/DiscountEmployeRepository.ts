import { DeleteResult } from "typeorm";
import { AppDataSource } from "../data-source";
import { DiscountEmployee } from "../entities/DiscountEmployee";

export class DiscountEmployeeRepository {
  private repository = AppDataSource.getRepository(DiscountEmployee);

  async findAll(): Promise<DiscountEmployee[]> {
    return await this.repository.find();
  }

  async findById(idDiscountEmp: number): Promise<DiscountEmployee | null> {
    return await this.repository.findOneBy({ idDiscountEmp });
  }

  async save(discountEmployee: DiscountEmployee): Promise<DiscountEmployee> {
    return await this.repository.save(discountEmployee);
  }

  async delete(idDiscountEmp: number): Promise<DeleteResult> {
    return await this.repository.delete({ idDiscountEmp });
  }
}
