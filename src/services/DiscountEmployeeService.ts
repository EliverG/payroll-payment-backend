import { DiscountEmployee } from './../entities/DiscountEmployee';
import { DiscountEmployeeRepository } from '../repositories/DiscountEmployeRepository';
import { AppDataSource } from "../data-source";
import { DeleteResult } from 'typeorm';

export class DiscountEmployeeService {

  private discountEmployeeRepository = new DiscountEmployeeRepository();

  async getAllDiscountEmployees(): Promise<DiscountEmployee[]> {
    return await this.discountEmployeeRepository.findAll();
  }

  async deleteDiscountEmployeeById(idDiscountEmp: number): Promise<number> {
    const result: DeleteResult = await this.discountEmployeeRepository.delete(idDiscountEmp);
    return result.affected ?? 0;
  }

  async createDiscountEmployee(newDiscountEmployee: DiscountEmployee): Promise<DiscountEmployee> {
    return this.discountEmployeeRepository.save(newDiscountEmployee);
  }

  async discountEmployeeById(idDiscountEmp: number): Promise<DiscountEmployee | null> {
    return this.discountEmployeeRepository.findById(idDiscountEmp);
  }
}
