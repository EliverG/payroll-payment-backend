import { Request, Response } from "express";
import { ManagementService } from "../services/ManagementService";
import { Management } from "../entities/Management";

const managementService = new ManagementService()

export class ManagementController{

    async getAllManagement(req: Request, res: Response): Promise<void> {
        try {
          const managements = await managementService.getAllUsers();
          if(managements.length > 0){
            res.status(200)
            res.json(managements);
          }else{
            res.status(204)
            res.json([]);
          }
        } catch (err) {
          res.status(500).send("Error al obtener las Gerencia");
        }
      }

      async deleteManagementById(req: Request, res: Response): Promise<void> {
        try {
          const { id } = req.params;
          const deletedRows = await managementService.deleteManagementByCode(id);
    
          if (deletedRows > 0) {
            res.status(200).json(
              {
                message: "Gerencia eliminado correctamente",
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

      async registryManagement(req: Request, res: Response): Promise<void>{
        try {
          console.log("managementReq 1: ", req.body)

          const managementReq  = req.body;

          console.log("managementReq 2: ", managementReq)
          
          if (!managementReq) {
            res.status(400).json({ message: "Datos de Gerencia requeridos" });
          }
          
          const newManagement: Management = await managementService.createManagement(managementReq);
    
          res.status(201).json(newManagement);
          
        } catch (err: any) {
           res.status(500).json({ message: "Error al registrar Gerencia", error: err.message });
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