import express, { Request, Response } from "express";
import userRoutes from "./routers/userRoutes"; // Importamos las rutas de usuario
import cors from 'cors';

const app = express();

// 👇 CORS habilitado solo para tu frontend (Vite en el puerto 5173)
app.use(cors({
  origin: 'http://localhost:5173',
  credentials: true
}));

// Configuración para recibir JSON en el cuerpo de las solicitudes
app.use(express.json());

// Configuración de rutas
app.use("/nomina", userRoutes);

app.get("/", (req: Request, res: Response) => {
  res.send("¡Bienvenido a la API!");
});

export default app;
