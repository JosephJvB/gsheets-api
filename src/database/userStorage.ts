import { User } from "../types/user";
import SheetClient from "./sheetClient";

export default class UserStorage {
  private sheetClient: SheetClient;
  constructor() {
    const spreadsheetId = process.env.SPREADSHEET_ID;
    this.sheetClient = new SheetClient(spreadsheetId, "users");
  }
  async getAllUsers(): Promise<User[]> {
    const rows = await this.sheetClient.getRows("A:B");
    return rows.map((r, idx) => ({
      id: idx + 1,
      email: r[0],
      password: r[1],
    }));
  }
  async updateUser(user: User) {
    await this.sheetClient.updateRow(`A${user.id}:B${user.id}`, [
      user.email,
      user.password,
    ]);
  }
  async addUser(user: Omit<User, "id">) {
    await this.sheetClient.addRow("A:B", [user.email, user.password]);
  }
  async deleteUser(id: number) {
    await this.sheetClient.deleteRow(`A${id}:B${id}`);
  }
}
