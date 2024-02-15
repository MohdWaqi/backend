const mongoose = require("mongoose");

const connected =async()=>{
  try {
   await mongoose.connect(process.env.ProductDatabase)
  } catch (error) {
    console.log("Error connecting to Mongo")
  }
}

module.exports  = connected
