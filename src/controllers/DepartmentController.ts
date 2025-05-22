import { Request, Response } from "express";
import { DepartmentService } from "../services/DepartmentService";
import { Department } from "../entities/Department";

const departmentService = new DepartmentService()

export class DepartmentController{

    async getAllDepartment(req: Request, res: Response): Promise<void> {
        try {
          const departments = await departmentService.getAllUsers();
          if(departments.length > 0){
            res.status(200)
            res.json(departments);
          }else{
            res.status(204)
            res.json([]);
          }
        } catch (err) {
          res.status(500).send("Error al obtener los departamentos");
        }
      }

      async deleteDepartmentById(req: Request, res: Response): Promise<void> {
              try {
                const { id } = req.params;
                const deletedRows = await departmentService.deleteDepartmentByCode(String(id));
          
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
                res.status(500).json({ message: "Error eliminando Departamento", error: err.message });
              }
            }

      /*async registryDepartment(req: Request, res: Response): Promise<void>{
        try {
          console.log("DepartmentReq 1: ", req.body)

          const departmentReq  = req.body;

          console.log("DepartmentReq 2: ", departmentReq)
          
          if (!departmentReq) {
            res.status(400).json({ message: "Datos de departamento requeridos" });
          }
          const newDepartment: Department = await departmentService.createDepartment(departmentReq);
    
          res.status(201).json(newDepartment);
          
        } catch (err: any) {
           res.status(500).json({ message: "Error al registrar Departamento", error: err.message });
        }
      }*/

        async registryDepartment(req: Request, res: Response): Promise<void> {
          try {
            const departmentReq = req.body;
        
            if (!departmentReq) {
              res.status(400).json({ message: "Datos de departamento requeridos" });
              return;
            }
        
            const newDepartment = await departmentService.createDepartment(departmentReq);
            res.status(201).json(newDepartment);
          } catch (err: any) {
            res.status(400).json({ message: err.message || "Error al registrar Departamento" });
          }
        }
        
      
}