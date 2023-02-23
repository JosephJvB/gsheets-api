declare global {
  namespace NodeJS {
    interface ProcessEnv {
      SPREADSHEET_ID: string;
    }
  }
}

export {};
