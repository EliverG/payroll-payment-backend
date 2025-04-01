import { Entity, Column, PrimaryColumn, OneToMany } from "typeorm";
import { Department } from "./Department";

@Entity({ name: "MANAGEMENT", schema: "NOMINAUSR" })
export class Management {
  @PrimaryColumn({ name: "MAN_COD", type: "varchar", length: 15 })
  code!: string;

  @Column({ name: "MAN_NAME", type: "varchar", length: 50, nullable: false })
  name!: string;

  @OneToMany(() => Department, (department) => department.management)
  departments!: Department[];
}
