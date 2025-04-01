import { Entity, Column, PrimaryColumn, OneToMany } from "typeorm";
import { BonusEmployee } from "./BonusEmployee";

@Entity({ name: "BONUS", schema: "NOMINAUSR" })
export class Bonus {
  @PrimaryColumn({ name: "B_COD", type: "varchar", length: 15 })
  code!: string;

  @Column({ name: "B_NAME", type: "varchar", length: 50, nullable: false })
  name!: string;

  @Column({
    name: "B_DESCRIPTION",
    type: "varchar",
    length: 100,
    nullable: false,
  })
  description!: string;

  @Column({ name: "B_FORMULA", type: "varchar", length: 100, nullable: true })
  formula!: string;

  @Column({ name: "B_AMOUNT", type: "float", nullable: true })
  amount!: number;

  @OneToMany(() => BonusEmployee, (bonusEmployee) => bonusEmployee.bonus)
  bonusEmployees!: BonusEmployee[];
}
