import { Request, Response } from "express";
import { BonusEmployeeService } from "../services/BonusEmployeeService";
import { BonusEmployee } from "../entities/BonusEmployee";
import { createObjectCsvStringifier } from "csv-writer";

const bonusEmployeeService = new BonusEmployeeService();

export class BonusEmployeeController {
  async getAllBonusEmployee(req: Request, res: Response): Promise<void> {
    try {
      const bonusEmployees = await bonusEmployeeService.getAllUsers();
      if (bonusEmployees.length > 0) {
        res.status(200);
        res.json(bonusEmployees);
      } else {
        res.status(204);
        res.json([]);
      }
    } catch (err) {
      res
        .status(500)
        .send("Error al obtener las bonificaciones de los empleados");
    }
  }

  async deleteBonusEmployeeById(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.params;
      const deletedRows = await bonusEmployeeService.deleteBonusEmployeeByCode(
        Number(id)
      );

      if (deletedRows > 0) {
        res.status(200).json({
          message: "bonificaciones de empleado eliminado correctamente",
          totalDelete: deletedRows,
        });
      } else {
        res.status(404).json({
          message: "bonificaciones de empleado no encontrado",
          totalDelete: deletedRows,
        });
      }
    } catch (err: any) {
      res.status(500).json({
        message: "Error eliminando bonificaciones de empleado",
        error: err.message,
      });
    }
  }

  async registryBonusEmployee(req: Request, res: Response): Promise<void> {
    try {
      console.log("bonusEmployeeReq 1: ", req.body);

      const bonusEmployeeReq = req.body;

      console.log("bonusEmployeeReq 2: ", bonusEmployeeReq);

      if (!bonusEmployeeReq) {
        res
          .status(400)
          .json({ message: "Datos de bonificaciones de empleado requeridos" });
      }

      const newBonusEmployee: BonusEmployee =
        await bonusEmployeeService.createBonusEmployee(bonusEmployeeReq);

      res.status(201).json(newBonusEmployee);
    } catch (err: any) {
      res.status(500).json({
        message: "Error al registrar bonificaciones de empleado",
        error: err.message,
      });
    }
  }

async downloadEmployeeBonusCSV(req: Request, res: Response): Promise<void> {
  try {
    const data = await bonusEmployeeService.generateEmployeeBonusReport();

    if (!data.length) {
      res.status(404).json({ message: "No se encontraron registros." });
      return;
    }

    const csv = this.generateCSV(data);

    res.setHeader(
      "Content-Disposition",
      "attachment; filename=empleado_bonos.csv"
    );
    res.setHeader("Content-Type", "text/csv");
    res.status(200).send(csv);
  } catch (error) {
    console.error("Error al generar el reporte:", error);
    res.status(500).json({ message: "Error al generar el reporte." });
  }
}


  generateCSV(data: any[]): string {
    if (!data.length) return "";

    const headers = Object.keys(data[0]).map((key) => ({
      id: key,
      title: key,
    }));

    const csvStringifier = createObjectCsvStringifier({ header: headers });

    return (
      csvStringifier.getHeaderString() + csvStringifier.stringifyRecords(data)
    );
  }
}
