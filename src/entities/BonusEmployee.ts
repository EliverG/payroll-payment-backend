import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from "typeorm";
import { Employee } from "./Employee";
import { Bonus } from "./Bonus";

@Entity({ name: "BONUS_EMPLOYEE", schema: "NOMINAUSR" })
export class BonusEmployee {
  @PrimaryGeneratedColumn({ name: "BE_ID", type: "int" })
    code!: number;

  @Column({ name: "B_COD", type: "varchar", length: 15 })
    bonusCode!: string;

  @Column({ name: "EMP_COD", type: "varchar", length: 15 })
    employeeCode!: string;

  @Column({ name: "BE_DATE_REG", type: "date", default: () => "CURRENT_DATE", nullable: false })
    dateReg!: Date;
    
  @ManyToOne(() => Employee, (employee) => employee.empCod)
    @JoinColumn({ name: "EMP_COD" })
    employee!: Employee;

  @ManyToOne(() => Bonus, (bonus) => bonus.bonusEmployees)
  @JoinColumn({ name: "B_COD" })
  bonus!: Bonus;
}