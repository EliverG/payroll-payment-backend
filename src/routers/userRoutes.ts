import { Router } from "express";
import { UserController } from "../controllers/userController";
import { EmployeeController } from "../controllers/EmployeeController";

const userController = new UserController();
const employeeController = new EmployeeController()

const router = Router();

router.get("/users", userController.getAllUsers);
router.get("/users/:id", userController.getUserById);
router.post("/users", userController.createUser);

router.get("/employees", employeeController.getAllEmployees)
router.delete("/employee/:id", (req, res) => employeeController.deleteEmployeeById(req, res));
router.post("/employee/create", (req, res) => employeeController.registryEmployee(req, res))

export default router;