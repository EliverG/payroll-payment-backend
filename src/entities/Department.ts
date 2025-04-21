import { Entity, Column, PrimaryColumn, ManyToOne, JoinColumn } from "typeorm";
import { Management } from "./Management";

@Entity({ name: "DEPARTMENT", schema: "NOMINAUSR" })
export class Department {
  @PrimaryColumn({ name: "DEP_COD", type: "varchar", length: 15 })
  code!: string;

  @Column({ name: "DEP_NAME", type: "varchar", length: 50, nullable: false })
  name!: string;

  @Column({
    name: "DEP_MANAGEMENT_COD",
    type: "varchar",
    length: 15,
    nullable: false,
  })
  managementCode!: string;

  @ManyToOne(() => Management, (management) => management.departments, {eager: true})
  @JoinColumn({ name: "DEP_MANAGEMENT_COD" })
  management!: Management;
}
