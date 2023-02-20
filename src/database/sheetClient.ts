import { google, sheets_v4 } from 'googleapis'

const CREDENTIALS_PATH = __dirname + '/../../secrets/service-account.json'
const SCOPES = ['https://www.googleapis.com/auth/spreadsheets']

export type sheetName = 'users'

export default class SheetClient {
    private sheetId = '1D_6v8Vxyrc845HfdIa2R-lzKZzn9uaPev-vP9TWUHWo'
    private client: sheets_v4.Sheets
    constructor(public sheetName: sheetName) {
        const authClient = new google.auth.GoogleAuth({
            scopes: SCOPES,
            keyFile: CREDENTIALS_PATH,
        })
        this.client = google.sheets({
            version: 'v4',
            auth: authClient,
        })
    }

    async getRows(range: string) {
        const res = await this.client.spreadsheets.values.get({
            spreadsheetId: this.sheetId,
            range: `${this.sheetName}!${range}`
        })
        return res.data.values || []
    }
    async addRow(range: string, row: string[]) {
        await this.client.spreadsheets.values.append({
            spreadsheetId: this.sheetId,
            range: `${this.sheetName}!${range}`,
            valueInputOption: 'RAW',
            insertDataOption: 'INSERT_ROWS',
            includeValuesInResponse: true,
            requestBody: {
                majorDimension: 'ROWS',
                values: [row],
            },
        })
    }
    async updateRow(range: string, row: string[]) {
        await this.client.spreadsheets.values.update({
            spreadsheetId: this.sheetId,
            range: `${this.sheetName}!${range}`,
            valueInputOption: 'RAW',
            includeValuesInResponse: true,
            requestBody: {
                majorDimension: 'ROWS',
                values: [row],
            }
        })
    }
    async deleteRow(range: string) {
        await this.client.spreadsheets.values.clear({
            spreadsheetId: this.sheetId,
            range: `${this.sheetName}!${range}`,
        })
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
