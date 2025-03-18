import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity("EMPLOYEE")
export class Employee {
  @PrimaryGeneratedColumn({ name: "COD_EMPLOYEE" })
  codEmployee!: number;

  @Column({ name: "FIRST_NAME" })
  firstName!: string;

  @Column({ name: "SECOND_NAME", nullable: true })
  secondName?: string;

  @Column({ name: "THIRD_NAME", nullable: true })
  thirdName?: string;

  @Column({ name: "LAST_NAME" })
  lastName!: string;

  @Column({ name: "SECOND_LAST_NAME", nullable: true })
  secondLastName?: string;

  @Column({ name: "CUI" })
  cui!: string;

  @Column({ name: "PHONE_NUMBER" })
  phoneNumber!: string;

  @Column({ name: "DATE_OF_BIRTH", type: "date" })
  dateOfBirth!: Date;

  @Column({ name: "ADDRESS", nullable: true })
  address?: string;

  @Column({ name: "EMAIL", unique: true })
  email!: string;

  @Column({ name: "COD_POSITION" })
  codPosition!: number;

  @Column({ name: "STATUS_EMPLOYEE" })
  statusEmployee!: number;

  @Column({ name: "DATE_OF_ADMISSION", type: "date" })
  dateOfAdmission!: Date;
}
