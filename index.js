require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const multer = require("multer");
const upload = multer();
const app = express();
const cors = require("cors");
const router = require("./Routes/router");
const cookieParser = require("cookie-parser");
const connected = require("./config/connect");
const { default: mongoose } = require("mongoose");
const port = 8000;

connected();

app.set("trust proxy", 1)
app.use(cors({
  origin: 'https://ykhandicraft.netlify.app',
  credentials: true
}));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(upload.array());
app.use(cookieParser());
app.use(router);

mongoose.connection.once("open", () => {
  console.log("connected to Mongo Successfully");
  app.listen(port, () => {
    console.log(`Server is Running on port ${port}`);
  });
});
