const express = require("express");
const app = express();
const path = require("path");
const cors = require("cors");
const PORT = process.env.PORT || 5000;
const dirPath = path.join(__dirname, "images");

app.use(cors());

app.get("/", (req, res) => {
  res.send("hello bhamiya");
});

app.get("/image", (req, res) => {
  return res.sendFile(`${dirPath}/tom.png`);
});

app.listen(PORT, () => {
  console.log(`App started listening on: http://localhost:${PORT}`);
});
