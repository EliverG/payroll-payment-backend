import { Entity, Column, PrimaryColumn, ManyToOne, JoinColumn, PrimaryGeneratedColumn } from "typeorm";
import { Employee } from "./Employee";

@Entity({ name: "HISTORY_PAYMENT", schema: "NOMINAUSR" })
export class HistoryPayment {
  @PrimaryGeneratedColumn({ name: "HP_ID", type: "int" })
  id!: number;

  @Column({ name: "EMP_CODE", type: "varchar", length: 15 })
  employeeCode!: string;

  @Column({ name: "HP_SALARY_AMOUNT", type: "float", nullable: false })
  salaryAmount!: number;

  @Column({ name: "HP_TOTAL_DISCOUNT", type: "float", nullable: false })
  totalDiscount!: number;

  @Column({ name: "HP_TOTAL_BONUS", type: "float", nullable: false })
  totalBonus!: number;

  @Column({ name: "HP_NET_SALARY", type: "float", nullable: false })
  netSalary!: number;

  @Column({ name: "HP_DATE_PAYMENT", type: "date", default: () => "CURRENT_DATE", nullable: false })
  datePayment!: Date;

  @ManyToOne(() => Employee, (employee) => employee.empCod)
  @JoinColumn({ name: "EMP_CODE" })
  employee!: Employee;
}
