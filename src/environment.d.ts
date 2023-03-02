declare global {
  namespace NodeJS {
    interface ProcessEnv {
      SPREADSHEET_ID: string;
      USERS_SHEET_NAME: string;
      GOOGLE_ACCOUNT_private_key: string;
      GOOGLE_ACCOUNT_client_email: string;
      AWS_REGION: string;
      DDB_USER_TABLE: string;
    }
  }
}

export {};
