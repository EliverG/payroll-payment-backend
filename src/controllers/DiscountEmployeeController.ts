import { Request, Response } from "express";
import { DiscountEmployeeService } from "../services/DiscountEmployeeService";
import { DiscountEmployee } from "../entities/DiscountEmployee";

const discountEmployeeService = new DiscountEmployeeService();

export class DiscountEmployeeController {

  async getAllDiscountEmployees(req: Request, res: Response): Promise<void> {
    try {
      const discountEmployees = await discountEmployeeService.getAllDiscountEmployees();
      if (discountEmployees.length > 0) {
        res.status(200).json(discountEmployees);
      } else {
        res.status(204).json([]);
      }
    } catch (err) {
      res.status(500).send("Error al obtener los descuentos por empleado");
    }
  }

  async getDiscountEmployeeById(req: Request, res: Response): Promise<void> {
    try {
      const discountEmployee = await discountEmployeeService.discountEmployeeById(parseInt(req.params.id));
      if (discountEmployee != null) {
        res.status(200).json(discountEmployee);
      } else {
        res.status(204).json(discountEmployee);
      }
    } catch (err: any) {
      res.status(500).json({ message: "Error al obtener descuento por empleado", error: err.message });
    }
  }

  async deleteDiscountEmployeeById(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.params;
      const deletedRows = await discountEmployeeService.deleteDiscountEmployeeById(parseInt(id));

      if (deletedRows > 0) {
        res.status(200).json({
          message: "Descuento de empleado eliminado correctamente",
          totalDelete: deletedRows,
        });
      } else {
        res.status(404).json({
          message: "Descuento de empleado no encontrado",
          totalDelete: deletedRows,
        });
      }
    } catch (err: any) {
      res.status(500).json({ message: "Error eliminando descuento de empleado", error: err.message });
    }
  }

  async registryDiscountEmployee(req: Request, res: Response): Promise<void> {
    try {
      const discountEmployeeReq = req.body;

      if (!discountEmployeeReq) {
        res.status(400).json({ message: "Datos del descuento por empleado requeridos" });
        return;
      }

      const newDiscountEmployee: DiscountEmployee = await discountEmployeeService.createDiscountEmployee(discountEmployeeReq);

      res.status(201).json(newDiscountEmployee);
    } catch (err: any) {
      res.status(500).json({ message: "Error al registrar descuento por empleado", error: err.message });
    }
  }
}
