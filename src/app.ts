import express, { Request, Response } from "express";
import userRoutes from "./routers/userRoutes"; // Importamos las rutas de usuario
import cors from "cors";  // Importa cors

// Crear una instancia de Express
const app = express();

// Habilitar CORS para todas las solicitudes
app.use(cors());

// Configuración para recibir JSON en el cuerpo de las solicitudes
app.use(express.json());

// Configuración de rutas
app.use("/nomina", userRoutes);

app.get("/", (req: Request, res: Response) => {
  res.send("¡Bienvenido a la API!");
});

export default app;