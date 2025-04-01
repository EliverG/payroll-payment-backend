import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";
import { Discount } from "./Discount";
import { Employee } from "./Employee";

@Entity({ name: "DISCOUNT_EMPLOYEE", schema: "NOMINAUSR" })
export class DiscountEmployee {

  @PrimaryGeneratedColumn({name: "DE_ID", type: "int"})
  idDiscountEmp!: number

  @Column({ name: "DIS_COD", type: "varchar", length: 15 })
  codDiscountEmployee!: string;

  @Column({ name: "EMP_COD", type: "varchar", length: 15 })
  codEmployee!: string;

  @Column({ name: "DE_AMOUNT", type: "int" })
  amount!: number;

  @Column({ name: "DE_DATE_REG", type: "date" })
  dateReg!: Date;

  @ManyToOne(() => Discount, (discount) => discount.codDiscount)
  @JoinColumn({ name: "DIS_COD" })
  discount!: Discount;

  @ManyToOne(() => Employee, (employee) => employee.empCod)
  @JoinColumn({ name: "EMP_COD" })
  employee!: Employee;
}
