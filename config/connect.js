const mongoose = require("mongoose");

const connected =async()=>{
  try {
   await mongoose.connect(process.env.ProductDatabase)
    console.log("connected to Mongo Successfully")
  } catch (error) {
    console.log("Error connecting to Mongo")
  }
}

module.exports  = connected
