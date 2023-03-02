import { APIGatewayProxyEvent, APIGatewayProxyResultV2 } from "aws-lambda";
import { User } from "./types/user";
import DdbClient from "./database/ddbClient";

const ddb = new DdbClient();

export const handler = async (
  event: APIGatewayProxyEvent
): Promise<APIGatewayProxyResultV2> => {
  try {
    console.log(event.body);
    const user: User = JSON.parse(event.body as string);
    console.log(user);
    await ddb.addUser(user);
    return {
      statusCode: 201,
    };
  } catch (e) {
    console.error(e);
    console.error("lambda handler failed");
    return {
      statusCode: 500,
      body: JSON.stringify({
        message: e || "lambda handler failed",
      }),
    };
  }
};
