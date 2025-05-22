import { Router } from "express";
import { UserController } from "../controllers/userController";
import { EmployeeController } from "../controllers/EmployeeController";
import { AuthService } from "../services/AuthService";
import { AuthController } from "../controllers/AuthController";
import { ManagementController } from "../controllers/ManagementController";
import { DepartmentController } from "../controllers/DepartmentController";
import { BonusController } from "../controllers/BonusController";
import { BonusEmployeeController } from "../controllers/BonusEmployeeController";

import { JobController } from "../controllers/JobController";

const userController = new UserController();
const employeeController = new EmployeeController()
const managementController = new ManagementController()
const authController = new AuthController()
const departmentController = new DepartmentController();
const bonusController = new BonusController();
const bonusEmployeeController = new BonusEmployeeController();

const jobController = new JobController();

const router = Router();

router.get("/users", userController.getAllUsers);
router.get("/users/:id", userController.getUserById);
router.post("/users", userController.createUser);

router.get("/employees", employeeController.getAllEmployees)
router.get("/employees/code/:code", employeeController.getEmployeeByCode)
router.delete("/employee/:id", (req, res) => employeeController.deleteEmployeeById(req, res));
router.post("/employee/create", (req, res) => employeeController.registryEmployee(req, res))

router.get("/managements", managementController.getAllManagement)
//router.get("/managements/code/:code",  managementController.getManagementByCode)
router.delete("/management/:id", (req, res) => managementController.deleteManagementById(req, res));
router.post("/management/create", (req, res) => managementController.registryManagement(req, res))

router.get("/Department", departmentController.getAllDepartment)
router.delete("/Department/:id", (req, res) => departmentController.deleteDepartmentById(req, res));
router.post("/Department/create", (req, res) => departmentController.registryDepartment(req, res))

router.get("/bonus", bonusController.getAllBonus)
router.delete("/bonus/:id", (req, res) => bonusController.deleteBonusById(req, res));
router.post("/bonus/create", (req, res) => bonusController.registryBonus(req, res))

router.get("/bonusEmployee", bonusEmployeeController.getAllBonusEmployee)
router.delete("/bonusEmployee/:id", (req, res) => bonusEmployeeController.deleteBonusEmployeeById(req, res));
router.post("/bonusEmployee/create", (req, res) => bonusEmployeeController.registryBonusEmployee(req, res))


router.get("/job", jobController.getAllJob)
router.delete("/job/:id", (req, res) => jobController.deleteJobById(req, res));
router.post("/job/create", (req, res) => jobController.registryJob(req, res));
router.get("/job/code/:code", (req, res) => jobController.getJobByCode(req, res));
router.get("/jobs/details", (req, res) => jobController.getJobsWithDetails(req, res));


router.get("/usr-rol/:id", (req, res) => authController.getRolByUsr(req, res));
export default router;