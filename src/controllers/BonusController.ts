import { Request, Response } from "express";
import { BonusService } from "../services/BonusService";
import { Bonus } from "../entities/Bonus";

const bonusService = new BonusService()

export class BonusController{

    async getAllBonus(req: Request, res: Response): Promise<void> {
        try {
          const bonus = await bonusService.getAllUsers();
          if(bonus.length > 0){
            res.status(200)
            res.json(bonus);
          }else{
            res.status(204)
            res.json([]);
          }
        } catch (err) {
          res.status(500).send("Error al obtener las Gerencia");
        }
      }

      async deleteBonusById(req: Request, res: Response): Promise<void> {
        try {
          const { id } = req.params;
          const deletedRows = await bonusService.deleteBonusByCode(id);
    
          if (deletedRows > 0) {
            res.status(200).json(
              {
                message: "Bonus eliminado correctamente",
                totalDelete: deletedRows
            });
          } else {
            res.status(404).json({
               message: "Gerencia no encontrado",
               totalDelete: deletedRows
               });
          }
        } catch (err: any) {
          res.status(500).json({ message: "Error eliminando Gerencia", error: err.message });
        }
      }

      async registryBonus(req: Request, res: Response): Promise<void>{
        try {
          console.log("bonusReq 1: ", req.body)

          const bonusReq  = req.body;

          console.log("bonusReq 2: ", bonusReq)
          
          if (!bonusReq) {
            res.status(400).json({ message: "Datos de Gerencia requeridos" });
          }
          
          const newBonus: Bonus = await bonusService.createBonus(bonusReq);
    
          res.status(201).json(newBonus);
          
        } catch (err: any) {
           res.status(500).json({ message: "Error al registrar Bonus", error: err.message });
        }
      }

        /* async getManagementByCode(req: Request, res: Response): Promise<void>{
              try{
                const managementById = await managementService.managementById(req.params.code)
                if(managementById != null){
                  res.status(200).json(managementById)
                }else{
                  res.status(204).json(managementById)
                }
              }catch(err: any){
                res.status(500).json({message: 'Error al obtener gerencia por codigo', error: err.message})
              }
            }*/
}