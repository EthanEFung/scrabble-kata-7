const express = require("express");
const path = require("path");

const app = express();
const PORT = 3000;
const router = require("./routes/index");

app.use(router);

app.listen(PORT, err => {
  if (err) throw err;
  console.log("listening to port ", PORT);
});
