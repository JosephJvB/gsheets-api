import { APIGatewayProxyEvent, APIGatewayProxyResultV2 } from "aws-lambda";
import UserStorage from "./database/userStorage";
import { User } from "./types/user";

const userStorage = new UserStorage();

export const handler = async (
  event: APIGatewayProxyEvent
): Promise<APIGatewayProxyResultV2> => {
  try {
    console.log(event.body);
    const user: User = JSON.parse(event.body as string);
    console.log("addUser", user);
    await userStorage.addUser(user);
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
