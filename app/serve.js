const express = require("express");
const route = require("./routes/index");
const app = express();

app.use(express.json());
app.use(route);
app.listen(3000, () => {
  console.log("Porta 3000");
});
