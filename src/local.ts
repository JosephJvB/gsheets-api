import dotenv from "dotenv";
import UserStorage from "./database/userStorage";

dotenv.config({
  path: __dirname + "/../.env",
});

void (async function () {
  try {
    const arg = process.argv.slice(2).pop();
    console.log("LocalGoogleSheetsAPI >", arg);
    const userStorage = new UserStorage();
    switch (arg) {
      case "addUser":
        await userStorage.addUser({
          email: "joevanbo@gmail.com",
          password: "abc123",
        });
        break;
      case "updateUser":
        await userStorage.updateUser({
          id: 1,
          email: "joevanbo@gmail.com",
          password: "UPDATED",
        });
        break;
      case "deleteUser":
        await userStorage.deleteUser(1);
        break;
      case "rateLimit":
        for (let i = 0; i < 100; i++) {
          await userStorage.addUser({
            email: "joevanbo@gmail.com",
            password: "abc123",
          });
        }
        break;
    }
  } catch (e) {
    console.error(e);
    console.error("failed");
  }
})();
