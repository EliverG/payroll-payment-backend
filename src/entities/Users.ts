import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: "USERS_APP" })
export class Users {

  @PrimaryGeneratedColumn({ name: "USER_ID" })
  userId!: string;

  @Column({ name: "PASSWORD" })
  password!: string;

  @Column({ name: "ROL" })
  roll?: string;
}
