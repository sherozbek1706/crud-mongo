const express = require("express");
const db = require("./db");
const app = express();
const usersRouter = require("./routers/users");

app.use(express.json());
app.use(usersRouter);
db();
app.listen(5050, () => {
  console.log("Server has been started on PORT 5050");
});
