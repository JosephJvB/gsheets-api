import { google, sheets_v4 } from "googleapis";

const SCOPES = ["https://www.googleapis.com/auth/spreadsheets"];

export default class SheetClient {
  private client: sheets_v4.Sheets;
  constructor(public spreadsheetId: string, public sheetName: string) {
    // https://stackoverflow.com/questions/30400341/environment-variables-containing-newlines-in-node
    const privateKey = process.env.GOOGLE_ACCOUNT_private_key.replace(
      /\\n/g,
      "\n"
    );
    const authClient = new google.auth.GoogleAuth({
      scopes: SCOPES,
      credentials: {
        private_key: privateKey,
        client_email: process.env.GOOGLE_ACCOUNT_client_email,
      },
    });
    this.client = google.sheets({
      version: "v4",
      auth: authClient,
    });
  }

  async getRows(range: string) {
    const res = await this.client.spreadsheets.values.get({
      spreadsheetId: this.spreadsheetId,
      range: `${this.sheetName}!${range}`,
    });
    return res.data.values || [];
  }
  async addRow(range: string, row: string[]) {
    await this.client.spreadsheets.values.append({
      spreadsheetId: this.spreadsheetId,
      range: `${this.sheetName}!${range}`,
      valueInputOption: "RAW",
      insertDataOption: "INSERT_ROWS",
      includeValuesInResponse: true,
      requestBody: {
        majorDimension: "ROWS",
        values: [row],
      },
    });
  }
  async updateRow(range: string, row: string[]) {
    await this.client.spreadsheets.values.update({
      spreadsheetId: this.spreadsheetId,
      range: `${this.sheetName}!${range}`,
      valueInputOption: "RAW",
      includeValuesInResponse: true,
      requestBody: {
        majorDimension: "ROWS",
        values: [row],
      },
    });
  }
  async deleteRow(range: string) {
    await this.client.spreadsheets.values.clear({
      spreadsheetId: this.spreadsheetId,
      range: `${this.sheetName}!${range}`,
    });
  }
  // private async addMetadata(range: string) {
  //     return this.client.spreadsheets.batchUpdate({
  //         spreadsheetId: this.sheetId,
  //         requestBody: {
  //             requests: [{
  //                 createDeveloperMetadata: {
  //                     developerMetadata: {
  //                         location: {
  //                             dimensionRange: {
  //                                 sheetId: this.sheetId,
  //                                 dimension: 'ROWS',
  //                                 startIndex: ''
  //                             },
  //                         }
  //                         metadataId:
  //                     }
  //                 }
  //             }]
  //         }
  //     })
  // }
}
