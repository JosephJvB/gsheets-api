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
          email: "joe@gmail.com",
          password: "abc123",
        });
        break;
      case "updateUser":
        await userStorage.updateUser({
          id: 1,
          email: "joe@gmail.com",
          password: "UPDATED",
        });
        break;
      case "deleteUser":
        await userStorage.deleteUser(1);
        break;
      case "add100Users":
        const promises: Promise<any>[] = [];
        for (let i = 0; i < 100; i++) {
          const p = userStorage.addUser({
            email: `joe+${i}@gmail.com`,
            password: "abc123",
          });
          promises.push(p);
        }
        await Promise.all(promises);
        break;
    }
  } catch (e) {
    console.error(e);
    console.error("failed");
    process.exit(1);
  }
})();
