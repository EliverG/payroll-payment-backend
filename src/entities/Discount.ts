import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity({ name: "DISCOUNT", schema: "NOMINAUSR" })
export class Discount {
  
  @PrimaryColumn({ name: "DIS_COD", type: "varchar", length: 15 })
  codDiscount!: string;

  @Column({ name: "DIS_NAME", type: "varchar", length: 100 })
  discountName!: string;

  @Column({ name: "DIS_DESCRIPTION", type: "varchar", length: 100 })
  discountDescription!: string;

  @Column({ name: "DIS_FORMULA", type: "varchar", length: 200 })
  discountFormula!: string;
}
