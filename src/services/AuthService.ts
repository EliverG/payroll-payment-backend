import { Users } from "../entities/Users";
import { UsersRepository } from "../repositories/UsersRepository";

export class AuthService{
    private authRepository = new UsersRepository()

      async getUserById(id: string): Promise<Users | null> {
        return await this.authRepository.findById(id);
      }
}