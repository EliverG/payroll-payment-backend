import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm";
import { Job } from "./Job";

@Entity("EMPLOYEE", { schema: "NOMINAUSR" })
export class Employee {
  @PrimaryColumn({ name: "EMP_COD", type: "varchar", length: 15 })
  empCod!: string;

  @Column({ name: "EMP_FIRST_NAME", type: "varchar", length: 25 })
  empFirstName!: string;

  @Column({ name: "EMP_SECOND_NAME", type: "varchar", length: 25, nullable: true })
  empSecondName?: string;

  @Column({ name: "EMP_THIRD_NAME", type: "varchar", length: 25, nullable: true })
  empThirdName?: string;

  @Column({ name: "EMP_LAST_NAME", type: "varchar", length: 25 })
  empLastName!: string;

  @Column({ name: "EMP_SECOND_LAST_NAME", type: "varchar", length: 25, nullable: true })
  empSecondLastName?: string;

  @Column({ name: "EMP_CUI", type: "varchar", length: 15 })
  empCui!: string;

  @Column({ name: "EMP_DATE_OF_BIRTH", type: "date" })
  empDateOfBirth!: Date;

  @Column({ name: "EMP_AGE", type: "int" })
  empAge!: number;

  @Column({ name: "EMP_EMAIL", type: "varchar", length: 50, nullable: true })
  empEmail?: string;

  @Column({ name: "EMP_PHONE_NUMBER", type: "int" })
  empPhoneNumber!: number;

  @Column({ name: "EMP_ADDRESS", type: "varchar", length: 200 })
  empAddress!: string;

  @Column({ name: "EMP_STATUS", type: "varchar", length: 15 })
  empStatus!: string;

  @Column({ name: "EMP_DATE_ADMISSION", type: "date" })
  empDateAdmission!: Date;

  @Column({ name: "EMP_DISCHARGE_DATE", type: "date", nullable: true })
  empDischargeDate?: Date;

  @Column({ name: "EMP_JOB_COD", type: "varchar", nullable: false })
  empCodJob?: string;

  @ManyToOne(() => Job, job => job.jobCode, {eager: true})
  @JoinColumn({ name: "EMP_JOB_COD" })
  job!: String;
}
