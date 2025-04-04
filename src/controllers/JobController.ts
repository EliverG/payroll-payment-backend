import { Request, Response } from "express";
import { JobService } from "../services/JobService";
import { Job } from "../entities/Job";

const jobService = new JobService()

export class JobController{

    async getAllJob(req: Request, res: Response): Promise<void> {
        try {
          const jobs = await jobService.getAllUsers();
          if(jobs.length > 0){
            res.status(200)
            res.json(jobs);
          }else{
            res.status(204)
            res.json([]);
          }
        } catch (err) {
          res.status(500).send("Error al obtener los puestos");
        }
      }

      async deleteJobById(req: Request, res: Response): Promise<void> {
        try {
          const { id } = req.params;
          const deletedRows = await jobService.deleteJobByCode(Number(id));
    
          if (deletedRows > 0) {
            res.status(200).json(
              {
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
          res.status(500).json({ message: "Error eliminando Puesto", error: err.message });
        }
      }

      async registryJob(req: Request, res: Response): Promise<void>{
        try {
          console.log("jobReq 1: ", req.body)

          const jobReq  = req.body;

          console.log("jobReq 2: ", jobReq)
          
          if (!jobReq) {
            res.status(400).json({ message: "Datos de puesto requeridos" });
          }
          const newJob: Job = await jobService.createJob(jobReq);
    
          res.status(201).json(newJob);
          
        } catch (err: any) {
           res.status(500).json({ message: "Error al registrar Puesto", error: err.message });
        }
      }
}