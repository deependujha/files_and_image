const express = require("express");
const app = express();
const path = require("path");
const cors = require("cors");
const multer = require("multer");

const dirPath = path.join(__dirname, "images");
const PORT = process.env.PORT || 5000;

app.use(cors());

const storage = multer.diskStorage({
  destination: path.join(__dirname, "images"),
  filename: (req, file, cb) => {
    cb(null, Date.now() + "---" + file.originalname);
  },
});

app.get("/", (req, res) => {
  res.send("hello bhamiya");
});

app.get("/image", (req, res) => {
  return res.sendFile(`${dirPath}/tom.png`);
});

app.post("/image", (req, res) => {
  try {
    let upload = multer({ storage }).single("img");
    upload(req, res, function (err) {
      // these lines will be executed only if there's an error
      if (!req.file) {
        return res.send("please select an image to upload");
      } else if (err instanceof multer.MulterError) {
        return res.send(err);
      } else if (err) {
        return res.send(err);
      } else {
        return res.send("some error occurred");
      }
    });
  } catch {
    console.log("an error occurred in uploading file");
  }
});

app.listen(PORT, () => {
  console.log(`App started listening on: http://localhost:${PORT}`);
});
