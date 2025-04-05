import { Router } from "express";
import { UserController } from "../controllers/userController";
import { EmployeeController } from "../controllers/EmployeeController";
import { AuthService } from "../services/AuthService";
import { AuthController } from "../controllers/AuthController";
import { ManagementController } from "../controllers/ManagementController";
import { DepartmentController } from "../controllers/DepartmentController";
import { BonusController } from "../controllers/BonusController";
import { BonusEmployeeController } from "../controllers/BonusEmployeeController";
import { DiscountController } from "../controllers/DiscountController";
import {DiscountEmployeeController} from "../controllers/DiscountEmployeeController";
import { DiscountEmployeeService } from "../services/DiscountEmployeeService";
import { JobController } from "../controllers/JobController";

//         res.status(400).json({ message: "No se recibieron datos para crear el descuento de empleado" });


const userController = new UserController();
const employeeController = new EmployeeController()
const managementController = new ManagementController()
const authController = new AuthController()
const departmentController = new DepartmentController();
const bonusController = new BonusController();
const bonusEmployeeController = new BonusEmployeeController();
const discountController = new DiscountController()
const discountEmployeeController = new DiscountEmployeeController()
const jobController = new JobController()

const router = Router();

router.get("/users", userController.getAllUsers);
router.get("/users/:id", userController.getUserById);
router.post("/users", userController.createUser);

router.get("/employees", employeeController.getAllEmployees)
router.get("/employees/code/:code", employeeController.getEmployeeByCode)
router.delete("/employee/:id", (req, res) => employeeController.deleteEmployeeById(req, res));
router.post("/employee/create", (req, res) => employeeController.registryEmployee(req, res))

router.get("/managements", (req, res) => managementController.getAllManagements(req, res));
router.get("/managements/code/:code", (req, res) => managementController.getManagementByCode(req, res));
router.delete("/management/:id", (req, res) => managementController.deleteManagementByCode(req, res));
router.post("/management/create", (req, res) => managementController.registryManagement(req, res));


router.get("/Department", departmentController.getAllDepartment)
router.delete("/Department/:id", (req, res) => departmentController.deleteDepartmentById(req, res));
router.post("/Department/create", (req, res) => departmentController.registryDepartment(req, res))

router.get("/bonus", bonusController.getAllBonus)
router.delete("/bonus/:id", (req, res) => bonusController.deleteBonusById(req, res));
router.post("/bonus/create", (req, res) => bonusController.registryBonus(req, res))

router.get("/bonusEmployee", bonusEmployeeController.getAllBonusEmployee)
router.delete("/bonusEmployee/:id", (req, res) => bonusEmployeeController.deleteBonusEmployeeById(req, res));
router.post("/bonusEmployee/create", (req, res) => bonusEmployeeController.registryBonusEmployee(req, res))
router.get("/discounts", (req, res) => discountController.getAllDiscounts(req, res));
router.get("/discounts/code/:code", (req, res) => discountController.getDiscountByCode(req, res));
router.delete("/discount/:id", (req, res) => discountController.deleteDiscountById(req, res));
router.post("/discount/create", (req, res) => discountController.registryDiscount(req, res));

router.get("/discount-employee", (req, res) => discountEmployeeController.getAllDiscountEmployees(req, res));
router.get("/discount-employee/:id", (req, res) => discountEmployeeController.getDiscountEmployeeById(req, res));
router.delete("/discount-employee/:id", (req, res) => discountEmployeeController.deleteDiscountEmployeeById(req, res));
router.post("/discount-employee/create", (req, res) => discountEmployeeController.registryDiscountEmployee(req, res));  

router.get("/job", (req, res) => jobController.getAllJobs(req, res));
router.get("/job/:code", (req, res) => jobController.getJobByCode(req, res));
router.delete("/job/:id", (req, res) => jobController.deleteJobByCode(req, res));
router.post("/job/create", (req, res) => jobController.registryJob(req, res));
router.put("/job/:id", (req, res) => jobController.updateJob(req, res));


router.get("/usr-rol/:id", (req, res) => authController.getRolByUsr(req, res));
export default router;