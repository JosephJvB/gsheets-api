import UserStorage from "./database/userStorage";

void (async function () {
  try {
    const userStorage = new UserStorage();
    // console.time("getUsers");
    // const users = await userStorage.getAllUsers();
    // console.timeEnd("getUsers");
    // console.log("got users", users.length);
    // console.log(users.slice(0, 5));
    // for (let i = 66; i < 100; i++) {
    //   console.time("addUser");
    //   await userStorage.addUser({
    //     email: `user${i}@gmail.com`,
    //     password: "123",
    //   });
    //   console.timeEnd("addUser");
    // }
    // console.time("updateUser");
    // await userStorage.updateUser({
    //   id: 2,
    //   email: "updated@gmail.com",
    //   password: "123abc",
    // });
    // console.timeEnd("updateUser");
    // console.time("deleteUser");
    // await userStorage.deleteUser(4);
    // console.timeEnd("deleteUser");
  } catch (e) {
    console.error(e);
    console.error("failed");
  }
})();

// getUsers: 803.043ms
// addUser: 510.233ms
