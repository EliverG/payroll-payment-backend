import { AppDataSource } from "../data-source";

export class ReportRepository {
  static async getEmployeesWithBonuses() {
    return await AppDataSource.query(`
      SELECT 
        e.*, 
        b.B_DESCRIPTION, 
        b.B_AMOUNT 
      FROM NOMINAUSR.EMPLOYEE e
      JOIN NOMINAUSR.BONUS_EMPLOYEE be ON e.EMP_COD = be.EMP_COD
      JOIN NOMINAUSR.BONUS b ON be.B_COD = b.B_COD
    `);
  }
}
