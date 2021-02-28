const express = require("express");
const { resolve } = require("path");

const execPath = process.cwd();

const app = express();

const port = process.env.PORT || 8080;
app.get("/", (req, res) => {
  res.send("Hello World!");
});


app.use('/winlinederbyfive', express.static(resolve(execPath, "dist")))

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});


