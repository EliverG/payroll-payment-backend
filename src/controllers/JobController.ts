import { Request, Response } from "express";
import { JobService } from "../services/JobService";
import { Job } from "../entities/Job";

const jobService = new JobService();

export class JobController {

  async getAllJob(req: Request, res: Response): Promise<void> {
    try {
      let jobs = await jobService.getAllUsers();

      if (jobs.length <= 0) {
        res.status(204).json([]);
        return;
      }

      res.status(200).json(jobs);
      return;
    } catch (err) {
      console.error('Unexpected error:', err);
      res.status(500).send("Error al obtener los puestos");
      return;
    }
  }

  async deleteJobById(req: Request, res: Response): Promise<void> {
    try {
      let { id } = req.params;
      let deletedRows = await jobService.deleteJobByCode(id);

      if (deletedRows === 0) {
        res.status(404).json({
          message: "Puesto no encontrado",
          totalDelete: deletedRows
        });
        return;
      }
    } catch (err: any) {
      res.status(500).json({ message: 'Error al obtener puesto por código', error: err.message });
    }
  }




  async registryJob(req: Request, res: Response): Promise<void> {
    try {
      let jobReq = req.body;

      if (!jobReq) {
        res.status(400).json({ message: "Datos de puesto requeridos" });
        return;
      }

      const newJob: Job = await jobService.createJob(jobReq);
      res.status(201).json(newJob);
      return;
    } catch (err: any) {
      res.status(500).json({ message: "Error al registrar Puesto", error: err.message });
      return;
    }
  }

  async getJobByCode(req: Request, res: Response): Promise<void> {
    try {
      const jobById = await jobService.jobById(req.params.code);

      if (!jobById) {
        res.status(204).json(jobById);
        return;
      }

      res.status(200).json(jobById);
      return;
    } catch (err: any) {
      res.status(500).json({ message: 'Error al obtener gerencia por código', error: err.message });
      return;
    }
  }

  async getJobsWithDetails(req: Request, res: Response): Promise<void> {
    try {
      const result = await jobService.getJobsWithDetails();
      
      if (result.length <= 0) {
        res.status(204).json([]);
        return;
      }

      res.status(200).json(result);
      return;
    } catch (error: any) {
      console.error("Error al obtener los puestos con detalles:", error);
      res.status(500).json({ message: "Error al obtener los puestos con detalles", error: error.message });
      return;
    }
  }
}
