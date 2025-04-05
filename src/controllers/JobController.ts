import { Request, Response } from "express";
import { JobService } from "../services/JobService";
import { Job } from "../entities/Job";

const jobService = new JobService();

export class JobController {

  // Obtener todos los puestos
  async getAllJobs(req: Request, res: Response): Promise<void> {
    try {
      const jobs = await jobService.getAllJobs();
      if (jobs.length > 0) {
        res.status(200).json(jobs);
      } else {
        res.status(204).json([]);
      }
    } catch (err) {
      res.status(500).send("Error al obtener los puestos");
    }
  }

  // Eliminar un puesto por código
  async deleteJobByCode(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.params;
      const deletedRows = await jobService.deleteJobByCode(id);

      if (deletedRows > 0) {
        res.status(200).json({
          message: "Puesto eliminado correctamente",
          totalDelete: deletedRows
        });
      } else {
        res.status(404).json({
          message: "Puesto no encontrado",
          totalDelete: deletedRows
        });
      }
    } catch (err: any) {
      res.status(500).json({ message: "Error eliminando puesto", error: err.message });
    }
  }

  // Registrar un nuevo puesto
  async registryJob(req: Request, res: Response): Promise<void> {
    try {
      const jobReq = req.body;

      if (!jobReq) {
        res.status(400).json({ message: "Datos de puesto requeridos" });
        return;
      }

      const newJob: Job = await jobService.createJob(jobReq);

      res.status(201).json(newJob);
    } catch (err: any) {
      res.status(500).json({ message: "Error al registrar puesto", error: err.message });
    }
  }

  // Obtener un puesto por código
  async getJobByCode(req: Request, res: Response): Promise<void> {
    try {
      const jobById = await jobService.jobById(req.params.code);
      if (jobById != null) {
        res.status(200).json(jobById);
      } else {
        res.status(204).json(jobById);
      }
    } catch (err: any) {
      res.status(500).json({ message: 'Error al obtener puesto por código', error: err.message });
    }
  }

  // Actualizar un puesto por código
  async updateJob(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.params;
      const jobData = req.body;

      const updatedJob = await jobService.updateJobByCode(id, jobData);

      if (updatedJob) {
        res.status(200).json({
          message: "Puesto actualizado correctamente",
          data: updatedJob
        });
      } else {
        res.status(404).json({ message: "Puesto no encontrado" });
      }
    } catch (err: any) {
      res.status(500).json({ message: "Error al actualizar puesto", error: err.message });
    }
  }
}
