import { Request, Response } from "express";
import { EmployeeService } from "../services/EmployeeService";
import { Employee } from "../entities/Employee";

const employeeService = new EmployeeService()

export class EmployeeController{

    async getAllEmployees(req: Request, res: Response): Promise<void> {
        try {
          const employees = await employeeService.getAllUsers();
          if(employees.length > 0){
            res.status(200)
            res.json(employees);
          }else{
            res.status(204)
            res.json([]);
          }
        } catch (err) {
          res.status(500).send("Error al obtener los empleados");
        }
      }

      async deleteEmployeeById(req: Request, res: Response): Promise<void> {
        try {
          const { id } = req.params;
          const deletedRows = await employeeService.deleteEmployeeByCode(id);
    
          if (deletedRows > 0) {
            res.status(200).json(
              {
                message: "Empleado eliminado correctamente",
                totalDelete: deletedRows
            });
          } else {
            res.status(404).json({
               message: "Empleado no encontrado",
               totalDelete: deletedRows
               });
          }
        } catch (err: any) {
          res.status(500).json({ message: "Error eliminando empleado", error: err.message });
        }
      }

      async registryEmployee(req: Request, res: Response): Promise<void>{
        try {
          console.log("employeeReq 1: ", req.body)

          const employeeReq  = req.body;

          console.log("employeeReq 2: ", employeeReq)
          
          if (!employeeReq) {
            res.status(400).json({ message: "Datos de empleado requeridos" });
          }
          const newEmployee: Employee = await employeeService.createEmployee(employeeReq);
    
          res.status(201).json(newEmployee);
          
        } catch (err: any) {
           res.status(500).json({ message: "Error al registrar empleado", error: err.message });
        }
      }

      async getEmployeeByCode(req: Request, res: Response): Promise<void>{
        try{
          const employeeById = await employeeService.employeeById(req.params.code)
          if(employeeById != null){
            res.status(200).json(employeeById)
          }else{
            res.status(204).json(employeeById)
          }
        }catch(err: any){
          res.status(500).json({message: 'Error al obtener empleado por codigo', error: err.message})
        }
      }
}