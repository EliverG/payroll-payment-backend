import { Request, Response } from "express";
import { ManagementService } from "../services/ManagementService";
import { Management } from "../entities/Management";

const managementService = new ManagementService();

export class ManagementController {
  async getAllManagements(req: Request, res: Response): Promise<void> {
    try {
      const managements = await managementService.getAllManagements();
      if (managements.length > 0) {
        res.status(200).json(managements);
      } else {
        res.status(204).json([]); 
      }
    } catch (err: unknown) {  
      if (err instanceof Error) {
        res.status(500).json({ message: "Error al obtener las gerencias", error: err.message });
      } else {
        res.status(500).json({ message: "Error desconocido" });
      }
    }
  }

  async deleteManagementByCode(req: Request, res: Response): Promise<void> {
    try {
      const { code } = req.params;  
      console.log(code)
      const deletedRows = await managementService.deleteManagementByCode(code);

      if (deletedRows > 0) {
        res.status(200).json({
          message: "Gerencia eliminada correctamente",
          totalDelete: deletedRows,
        });
      } else {
        res.status(404).json({
          message: "Gerencia no encontrada",
          totalDelete: deletedRows,
        });
      }
    } catch (err: unknown) {
      if (err instanceof Error) {
        res.status(500).json({
          message: "Error eliminando Gerencia",
          error: err.message,
        });
      } else {
        res.status(500).json({
          message: "Error desconocido",
        });
      }
    }
  }

  async registryManagement(req: Request, res: Response): Promise<void> {
    try {
      const managementReq = req.body;
      
      if (!managementReq || !managementReq.name || !managementReq.code) {  // Validación extra
        res.status(400).json({ message: "Datos de Gerencia requeridos: nombre y código" });
        return;
      }

      const newManagement: Management = await managementService.createManagement(managementReq);

      res.status(201).json(newManagement);
    } catch (err: unknown) {
      if (err instanceof Error) {
        res.status(500).json({
          message: "Error al registrar Gerencia",
          error: err.message,
        });
      } else {
        res.status(500).json({
          message: "Error desconocido",
        });
      }
    }
  }

  async getManagementByCode(req: Request, res: Response): Promise<void> {
    try {
      const managementByCode = await managementService.getManagementById(req.params.code);
      
      if (managementByCode) {
        res.status(200).json(managementByCode);
      } else {
        res.status(404).json({ message: "Gerencia no encontrada" });
      }
    } catch (err: unknown) {
      if (err instanceof Error) {
        res.status(500).json({
          message: "Error al obtener gerencia por código",
          error: err.message,
        });
      } else {
        res.status(500).json({
          message: "Error desconocido",
        });
      }
    }
  }
}
