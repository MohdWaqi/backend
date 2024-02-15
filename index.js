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

connected()

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(upload.array());
app.use(cookieParser());
app.use(router);

mongoose.connection.once("open", ()=>{
  console.log("connected to Mongo Successfully")
  app.listen(port, () => {
    console.log(`Server is Running on port ${port}`);
  });
})
