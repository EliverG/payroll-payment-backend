import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity("JOB", { schema: "NOMINAUSR" })
export class Job {
  @PrimaryColumn({ name: "JOB_COD", type: "varchar", length: 15 })
  jobCode!: string;

  @Column({ name: "JOB_NAME", type: "varchar", length: 50 })
  jobName?: string;

  @Column({ name: "JOB_COD_DEPARTMENT", type: "varchar", length: 100 })
  departmentCode?: string;

  @Column({ name: "JOB_SALARY", type: "float" })
  salary?: string;
}
