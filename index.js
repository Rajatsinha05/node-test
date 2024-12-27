const express = require("express");
require("dotenv").config();
const app = express();
app.use(express.json());
const PORT = process.env.PORT || 8090;

app.get("/", (req, res) => {
  res.send({ status: "OK", port: PORT });
});

app.listen(PORT, () => {
  console.log("listening on port " + PORT);
});
