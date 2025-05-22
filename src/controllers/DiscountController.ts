import { Request, Response } from "express";
import { DiscountService } from "../services/DiscountService";
import { Discount } from "../entities/Discount";

const discountService = new DiscountService();

export class DiscountController {


  async getAllDiscounts(req: Request, res: Response): Promise<void> {
    try {
      const discounts = await discountService.getAllDiscounts();
      if (discounts.length > 0) {
        res.status(200).json(discounts);
      } else {
        res.status(204).json([]);
      }
    } catch (err) {
      res.status(500).send("Error al obtener los descuentos");
    }
  }


  async getDiscountByCode(req: Request, res: Response): Promise<void> {
    try {
      const discount = await discountService.getDiscountById(req.params.code);
      if (discount != null) {
        res.status(200).json(discount);
      } else {
        res.status(204).json(discount);
      }
    } catch (err: any) {
      res.status(500).json({ message: "Error al obtener descuento por código", error: err.message });
    }
  }


  async deleteDiscountById(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.params;
      const deletedRows = await discountService.deleteDiscountByCode(id);

      if (deletedRows > 0) {
        res.status(200).json({
          message: "Descuento eliminado correctamente",
          totalDelete: deletedRows,
        });
      } else {
        res.status(404).json({
          message: "Descuento no encontrado",
          totalDelete: deletedRows,
        });
      }
    } catch (err: any) {
      res.status(500).json({ message: "Error eliminando descuento", error: err.message });
    }
  }

 
  async registryDiscount(req: Request, res: Response): Promise<void> {
    try {
      const discountReq = req.body;

      if (!discountReq) {
        res.status(400).json({ message: "Datos del descuento requeridos" });
        return;
      }

      const newDiscount: Discount = await discountService.createDiscount(discountReq);

      res.status(201).json(newDiscount);
    } catch (err: any) {
      res.status(500).json({ message: "Error al registrar descuento", error: err.message });
    }
  }
}
