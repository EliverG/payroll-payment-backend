import { Router } from "express";
import { UserController } from "../controllers/userController";
import { EmployeeController } from "../controllers/EmployeeController";
import { AuthService } from "../services/AuthService";
import { AuthController } from "../controllers/AuthController";

const userController = new UserController();
const employeeController = new EmployeeController()
const authController = new AuthController()

const router = Router();

router.get("/users", userController.getAllUsers);
router.get("/users/:id", userController.getUserById);
router.post("/users", userController.createUser);

router.get("/employees", employeeController.getAllEmployees)
router.get("/employees/code/:code", employeeController.getEmployeeByCode)
router.delete("/employee/:id", (req, res) => employeeController.deleteEmployeeById(req, res));
router.post("/employee/create", (req, res) => employeeController.registryEmployee(req, res))

router.get("/usr-rol/:id", (req, res) => authController.getRolByUsr(req, res));
export default router;