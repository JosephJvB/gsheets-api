require("fs").copyFileSync(
  __dirname + "/../package.json",
  __dirname + "/../dist/package.json"
);
