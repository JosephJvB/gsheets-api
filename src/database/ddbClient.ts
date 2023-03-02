import AWS from "aws-sdk";
import { DocumentClient } from "aws-sdk/clients/dynamodb";
import { User } from "../types/user";

export default class DdbClient {
  private client: DocumentClient;
  constructor() {
    AWS.config.update({
      region: process.env.AWS_REGION,
    });
    this.client = new AWS.DynamoDB.DocumentClient();
  }
  addUser(user: User) {
    return this.client
      .put({
        TableName: process.env.DDB_USER_TABLE,
        Item: user,
      })
      .promise();
  }
}
