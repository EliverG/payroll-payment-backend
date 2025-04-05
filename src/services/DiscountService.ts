import { Discount } from './../entities/Discount';
import { DiscountRepository } from '../repositories/DiscountRepository';
import { DeleteResult } from 'typeorm';

export class DiscountService {

  private discountRepository = new DiscountRepository();


  async getAllDiscounts(): Promise<Discount[]> {
    return await this.discountRepository.findAll();
  }


  async deleteDiscountByCode(codeDiscount: string): Promise<number> {
    const result: DeleteResult = await this.discountRepository.delete(codeDiscount);
    return result.affected ?? 0;
  }

  
  async createDiscount(newDiscount: Discount): Promise<Discount> {
    return this.discountRepository.save(newDiscount);
  }

  async getDiscountById(codeDiscount: string): Promise<Discount | null> {
    return this.discountRepository.findById(codeDiscount);
  }

}
