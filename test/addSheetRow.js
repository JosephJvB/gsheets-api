const axios = require("axios");

const url = "https://mfj0zjjx8j.execute-api.eu-west-2.amazonaws.com/v1/sheets";

axios({
  method: "post",
  url,
  data: {
    email: "joevanbo+localtest@gmail.com",
    password: "abc123",
  },
})
  .then((r) => {
    console.log(r.data);
    console.log("success");
  })
  .catch((e) => {
    if (e.isAxiosError && e.toJSON) {
      console.error(e.toJSON());
    } else {
      console.error(e);
    }
    console.error("failed");
  });
