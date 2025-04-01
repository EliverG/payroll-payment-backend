import { AppDataSource } from "../data-source";
import { Users } from "../entities/Users";

export class UsersRepository{
  private repository = AppDataSource.getRepository(Users);

  async findById(userId: string): Promise<Users | null> {
      return await this.repository.findOneBy({ userId });
    }

}