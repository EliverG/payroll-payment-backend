import { Request, Response } from "express";
import { BonusEmployeeService } from "../services/BonusEmployeeService";
import { BonusEmployee } from "../entities/BonusEmployee";

const bonusEmployeeService = new BonusEmployeeService()

export class BonusEmployeeController{

    async getAllBonusEmployee(req: Request, res: Response): Promise<void> {
        try {
          const bonusEmployees = await bonusEmployeeService.getAllUsers();
          if(bonusEmployees.length > 0){
            res.status(200)
            res.json(bonusEmployees);
          }else{
            res.status(204)
            res.json([]);
          }
        } catch (err) {
          res.status(500).send("Error al obtener las bonificaciones de los empleados");
        }
      }

      async deleteBonusEmployeeById(req: Request, res: Response): Promise<void> {
        try {
          const { id } = req.params;
          const deletedRows = await bonusEmployeeService.deleteBonusEmployeeByCode(Number(id));
    
          if (deletedRows > 0) {
            res.status(200).json(
              {
                message: "bonificaciones de empleado eliminado correctamente",
                totalDelete: deletedRows
            });
          } else {
            res.status(404).json({
               message: "bonificaciones de empleado no encontrado",
               totalDelete: deletedRows
               });
          }
        } catch (err: any) {
          res.status(500).json({ message: "Error eliminando bonificaciones de empleado", error: err.message });
        }
      }

      async registryBonusEmployee(req: Request, res: Response): Promise<void>{
        try {
          console.log("bonusEmployeeReq 1: ", req.body)

          const bonusEmployeeReq  = req.body;

          console.log("bonusEmployeeReq 2: ", bonusEmployeeReq)
          
          if (!bonusEmployeeReq) {
            res.status(400).json({ message: "Datos de bonificaciones de empleado requeridos" });
          }
          
          const newBonusEmployee: BonusEmployee = await bonusEmployeeService.createBonusEmployee(bonusEmployeeReq);
    
          res.status(201).json(newBonusEmployee);
          
        } catch (err: any) {
           res.status(500).json({ message: "Error al registrar bonificaciones de empleado", error: err.message });
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