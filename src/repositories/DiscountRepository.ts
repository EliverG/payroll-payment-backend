import { DeleteResult } from "typeorm";
import { AppDataSource } from "../data-source";
import { Discount } from "../entities/Discount";

export class DiscountRepository {
  private repository = AppDataSource.getRepository(Discount);

  
  async findAll(): Promise<Discount[]> {
    return await this.repository.find();
  }

  
  async findById(codDiscount: string): Promise<Discount | null> {
    return await this.repository.findOneBy({ codDiscount });
  }


  async save(discount: Discount): Promise<Discount> {
    return await this.repository.save(discount);
  }


  async delete(idDiscount: string): Promise<DeleteResult> {
    return await this.repository.delete({ codDiscount: idDiscount });
  }
}
