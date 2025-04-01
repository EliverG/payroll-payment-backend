import { Request, Response } from "express";
import { AuthService } from "../services/AuthService";

const authService = new AuthService()
export class AuthController{

    async getRolByUsr(req: Request, res: Response): Promise<void> {
            try {
              const { id } = req.params;
              const rolUsr = await authService.getUserById(id);
        
              if (rolUsr?.userId) {
                res.status(200).json(rolUsr);
              } else {
                res.status(404).json([]);
              }
            } catch (err: any) {
              res.status(500).json({ message: "Error al buscar rol de usaurio", error: err.message });
            }
          }
}